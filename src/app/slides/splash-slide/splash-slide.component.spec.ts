import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashSlideComponent } from './splash-slide.component';

describe('SplashSlideComponent', () => {
  let component: SplashSlideComponent;
  let fixture: ComponentFixture<SplashSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplashSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
