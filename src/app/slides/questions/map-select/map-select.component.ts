import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-select',
  templateUrl: './map-select.component.html',
  styleUrls: ['./map-select.component.scss']
})
export class MapSelectComponent implements OnInit {

  selected: string;

  constructor() { }

  ngOnInit(): void {
  }

  setSelected(option: string): void {
    this.selected = option;
  }

}
