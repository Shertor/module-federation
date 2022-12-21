import { ComponentFixture, TestBed } from "@angular/core/testing"
import { RouterLinkActive } from "@angular/router"
import { BtnMenuComponent } from "projects/styleguide-lib/src/lib/components/btn-menu/btn-menu.component"

import { NavigationComponent } from "./navigation.component"

describe("NavigationComponent", () => {
  let component: NavigationComponent
  let fixture: ComponentFixture<NavigationComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnMenuComponent, RouterLinkActive],
      declarations: [NavigationComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(NavigationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
