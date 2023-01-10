import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  ComponentRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewChild,
  ViewContainerRef,
  // ComponentFactoryResolver,
  // Injector,
  // Type,
} from "@angular/core"
import { loadRemoteModule } from "@angular-architects/module-federation"
import { PluginOptions } from "./plugin"
import { Subject, Subscription, takeUntil } from "rxjs"
import { BusEvent } from "@shared"

@Component({
  standalone: true,
  selector: "plugin-proxy",
  template: `<ng-container #placeHolder></ng-container>`,
})
export class PluginProxyComponent implements OnChanges {
  /**
   * Сабжект, позволяющий при помощи pipe(takeUntil(this.ngUnsubscribe))
   *  затем отписаться от всех подписок
   */
  private ngUnsubscribe = new Subject<void>()

  /** Ссылка на подставляемый плагин */
  @ViewChild("placeHolder", { read: ViewContainerRef, static: true })
  viewContainer!: ViewContainerRef

  /** Событие окончания инициализации плагина */
  @Output() loaded = new EventEmitter<boolean>()
  /** Событие для передачи в шину событий */
  @Output() toBusEvent = new EventEmitter<BusEvent>()

  /** Параметры плагинов */
  @Input() options!: PluginOptions

  constructor(private cdref: ChangeDetectorRef) {}

  async ngOnChanges() {
    this.viewContainer.clear()

    const Component = await loadRemoteModule(this.options).then(
      (m) => m[this.options.componentName]
    )

    const componentRef: ComponentRef<any> =
      this.viewContainer.createComponent(Component)

    // Создание подписчика на событие инициализации плагина
    componentRef.instance?.loaded
      ?.pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((loaded: boolean) => {
        if (loaded) {
          // console.log(componentRef.instance)
          this.loaded.emit(true)
        }
      })

    // Создание подписчика на события в шину событий
    componentRef.instance?.toBusEvent
      ?.pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((toBusEvent: BusEvent) => {
        if (toBusEvent) {
          this.toBusEvent.emit(toBusEvent)
        }
      })

    /**
     * Из-за того, что прокси-компоненты рендерит плагины через ngOnChanges хук
     * проиходит ошибка "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked."
     * `https://angular.io/errors/NG0100`
     * Для решения этой проблемы можно применить строчку ниже, которая подскажет Angular отследить изменения
     * в текущем компоненте и его Детях
     */
    this.cdref.detectChanges()
  }

  /**
   * Деструктор удаляет все подписки
   */
  ngOnDestroy() {
    this.ngUnsubscribe.next()
    this.ngUnsubscribe.complete()
  }
}
