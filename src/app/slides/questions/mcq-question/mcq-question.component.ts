import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mcq-question',
  templateUrl: './mcq-question.component.html',
  styleUrls: ['./mcq-question.component.scss']
})
export class MCQQuestionComponent implements OnInit {

  @Input() question: string;
  @Input() answers: string[];
  @Input() color: string;

  selected: string;

  constructor() { }

  ngOnInit(): void {
  }

  setSelected(answer: string): void {
    this.selected = answer;
  }

}
