import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plugin5Component } from './plugin5.component';

describe('Plugin5Component', () => {
  let component: Plugin5Component;
  let fixture: ComponentFixture<Plugin5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Plugin5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Plugin5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
