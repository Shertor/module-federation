import { ComponentFixture, TestBed } from "@angular/core/testing";

import { IntegratedClockComponent } from "./integrated-clock.component";

describe("IntegratedClockComponent", () => {
  let component: IntegratedClockComponent;
  let fixture: ComponentFixture<IntegratedClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntegratedClockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IntegratedClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
