import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLoaderComponent } from './view-loader.component';

describe('ViewLoaderComponent', () => {
  let component: ViewLoaderComponent;
  let fixture: ComponentFixture<ViewLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
