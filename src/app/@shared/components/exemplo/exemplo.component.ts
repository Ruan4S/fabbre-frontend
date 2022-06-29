import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo',
  templateUrl: './exemplo.component.html',
  styleUrls: ['./exemplo.component.scss'],
})
export class ExemploComponent implements OnInit {
  @Input() public obj: string;

  constructor() {}

  ngOnInit(): void {}
}
