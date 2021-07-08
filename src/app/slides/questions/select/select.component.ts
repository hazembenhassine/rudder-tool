import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        border: 'dashed 1px $orange'
      })),
      state('closed', style({
        height: '0',
        border: 'none'
      })),
      transition('open <=> closed', [
        animate('0.1s ease-in-out')
      ]),
    ]),
  ],
})
export class SelectComponent implements OnInit {

  isOpen: boolean;
  value: string;

  @Input() question: string;
  @Input() placeholder: string;
  @Input() options: string[];

  constructor() { }

  ngOnInit(): void {
  }

  toggleOpen(): void {
    this.isOpen = !this.isOpen;
  }

  setValue(option: string): void {
    this.value = option;
    this.toggleOpen();
  }

}
