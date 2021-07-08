import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneySplashComponent } from './money-splash.component';

describe('MoneySplashComponent', () => {
  let component: MoneySplashComponent;
  let fixture: ComponentFixture<MoneySplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneySplashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneySplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
