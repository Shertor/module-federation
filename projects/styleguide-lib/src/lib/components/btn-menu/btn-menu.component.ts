import { CommonModule } from "@angular/common"
import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from "@angular/core"

export type btnMenuStates = "toOpen" | "toClose"

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: "lib-btn-menu",
  templateUrl: "./btn-menu.component.html",
  styleUrls: ["./btn-menu.component.scss"],
})
export class BtnMenuComponent {
  @Output() opened = new EventEmitter<btnMenuStates>()
  @Output() closed = new EventEmitter<btnMenuStates>()

  @Input("state") state: btnMenuStates = "toOpen"

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    const log: string[] = []
    for (const propName in changes) {
      const changedProp = changes[propName]
      const to = JSON.stringify(changedProp.currentValue)
      // console.log(to)
    }
  }
  public onBtnOpen(): void {
    this.state = "toClose"
    this.opened.emit(this.state)
  }
  public onBtnClose(): void {
    this.state = "toOpen"
    this.closed.emit(this.state)
  }
}
