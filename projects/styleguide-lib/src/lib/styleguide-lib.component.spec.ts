import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleguideLibComponent } from './styleguide-lib.component';

describe('StyleguideLibComponent', () => {
  let component: StyleguideLibComponent;
  let fixture: ComponentFixture<StyleguideLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleguideLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleguideLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
