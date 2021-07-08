import { Component, OnInit } from '@angular/core';
import { animate, group, query, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':increment',
        [
          query(':enter, :leave', style({ position: 'fixed', width: 'inherit' }), { optional: true }),
          group([
            query(':enter', [style({ transform: 'translateX(100%)', opacity: '0' }), animate('.3s ease-out', style({ transform: 'translateX(0%)', opacity: '1' }))], {
              optional: true,
            }),
            query(':leave', [style({ transform: 'translateX(0%)', opacity: '1' }), animate('.3s ease-out', style({ transform: 'translateX(-100%)', opacity: '0' }))], {
              optional: true,
            }),
          ]),
        ]),
      transition(':decrement',
        [
          query(':enter, :leave', style({ position: 'fixed', width: 'inherit' }), { optional: true }),
          group([
            query(':enter', [style({ transform: 'translateX(-100%)', opacity: '0' }), animate('.3s ease-out', style({ transform: 'translateX(0%)', opacity: '1' }))], {
              optional: true,
            }),
            query(':leave', [style({ transform: 'translateX(0%)', opacity: '1' }), animate('.3s ease-out', style({ transform: 'translateX(100%)', opacity: '0' }))], {
              optional: true,
            }),
          ]),
        ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  title = 'eot-form';

  animationState: number;

  questions = [
    {
      step: 2,
      question: 'Are you?',
      answers: ['Male', 'Female'],
      color: 'orange'
    },
    {
      step: 3,
      question: 'How old are you ?',
      answers: ['[15-18]', '[19-35]', '35+'],
      color: 'orange'
    },
    {
      step: 4,
      question: 'Occupation',
      answers: ['Student', 'Young Pro', 'Senior'],
      color: 'orange'
    },
    {
      step: 5,
      question: 'Preferred language ?',
      answers: ['AR', 'FR', 'EN'],
      color: 'orange'
    },
    {
      step: 9,
      question: 'In which stage is your project ?',
      answers: ['Ideation', 'Pre seed', 'Seed', 'Acceleration', 'Growth', 'Scale-up'],
      color: 'orange'
    },
    {
      step: 10,
      question: 'What is your project type ?',
      answers: ['Idea', 'MVP', 'Startup', 'Social Business', 'Association', 'SME'],
      color: 'orange'
    },
    {
      step: 12,
      question: 'From this list which are your non-financial needs ?',
      answers: ['Trainings', 'Networking', 'Coaching', 'MatchMaking', 'Mentoring', 'Technical Support', 'Cloud Services', 'Incorporation', 'Hosting'],
      color: 'orange'
    },
    {
      step: 14,
      question: 'Are you willing to share equity ?',
      answers: ['Yes', 'No'],
      color: 'green'
    },
    {
      step: 15,
      question: 'How much money do you need ?',
      answers: ['[1k-14k]', '[15k-45k]', '[46k-100k]', '[101k-199k]', '[200k-999k]', '[1M-∞['],
      color: 'green'
    },
    {
      step: 16,
      question: 'Did you receive the start up label “StartAct” ?',
      answers: ['Yes', 'No'],
      color: 'green'
    },
  ];

  selects = [
    {
      step: 6,
      question: 'Nationality',
      placeholder: 'Nationality',
      options: ['Algerian', 'Tunisian', 'Moroccan', 'French', 'Libyan']
    },
    {
      step: 11,
      question: 'In which sector your project is included?',
      placeholder: 'Sector',
      options: ['FinTech ', 'Social', 'Health']
    }
  ];

  ngOnInit(): void {
    this.animationState = 0;
  }

  incrementState(): void {
    if (this.animationState !== 16) { this.animationState++; }
  }

  decrementState(): void {
    if (this.animationState !== 0) { this.animationState--; }
  }

}
