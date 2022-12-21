import { HttpClientModule } from "@angular/common/http"
import { ComponentFixture, TestBed } from "@angular/core/testing"

import { GeneralPageComponent } from "./general-page.component"

describe("GeneralPageComponent", () => {
  let component: GeneralPageComponent
  let fixture: ComponentFixture<GeneralPageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [GeneralPageComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(GeneralPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('shell app is running!');
  // });
})
