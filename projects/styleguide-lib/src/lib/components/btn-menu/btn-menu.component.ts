import { CommonModule } from "@angular/common"
import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from "@angular/core"
import { BehaviorSubject } from "rxjs"

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: "lib-btn-menu",
  templateUrl: "./btn-menu.component.html",
  styleUrls: ["./btn-menu.component.scss"],
})
export class BtnMenuComponent {
  public state = false
  @Output() opened = new EventEmitter<boolean>()

  constructor() {}

  public btnOpen(): void {
    this.state = true
    this.opened.emit(this.state)
  }
  public btnClose(): void {
    this.state = false
    this.opened.emit(this.state)
  }
}
