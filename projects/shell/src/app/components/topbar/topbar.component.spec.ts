import { ComponentFixture, TestBed } from "@angular/core/testing"
import { BtnMenuComponent } from "projects/styleguide-lib/src/lib/components/btn-menu/btn-menu.component"

import { TopbarComponent } from "./topbar.component"

describe("TopbarComponent", () => {
  let component: TopbarComponent
  let fixture: ComponentFixture<TopbarComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnMenuComponent],
      declarations: [TopbarComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(TopbarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
