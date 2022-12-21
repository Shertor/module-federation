import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BtnMenuComponent } from 'projects/styleguide-lib/src/lib/components/btn-menu/btn-menu.component';
import { FooterComponent } from '../footer/footer.component';
import { TopbarComponent } from '../topbar/topbar.component';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, BtnMenuComponent],
      declarations: [ MainComponent, TopbarComponent, FooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
