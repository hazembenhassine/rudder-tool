import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MCQQuestionComponent } from './mcq-question.component';

describe('MCQQuestionComponent', () => {
  let component: MCQQuestionComponent;
  let fixture: ComponentFixture<MCQQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MCQQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MCQQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
