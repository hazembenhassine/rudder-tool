import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSplashComponent } from './project-splash.component';

describe('ProjectSplashComponent', () => {
  let component: ProjectSplashComponent;
  let fixture: ComponentFixture<ProjectSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectSplashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
