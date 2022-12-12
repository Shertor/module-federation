import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MfeShellExampleService {
  private userName: string = "";
  private value: BehaviorSubject<number> = new BehaviorSubject(0);

  public get user(): string {
    return this.userName;
  }

  constructor() {}

  public changeValue(input: number): void {
    this.value.next(input);
  }

  public getValue() {
    return this.value;
  }

  public login(userName: string, password?: string): void {
    // Authentication for **honest** users TM. (c) Manfred Steyer
    this.userName = userName;
  }
}
