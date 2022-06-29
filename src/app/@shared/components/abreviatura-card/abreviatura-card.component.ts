import { Component, Input, OnInit } from '@angular/core';
import { AbreviaturaModel } from '@app/@shared/models/abreviatura.model';

@Component({
  selector: 'app-abreviatura-card',
  templateUrl: './abreviatura-card.component.html',
  styleUrls: ['./abreviatura-card.component.scss'],
})
export class AbreviaturaCardComponent implements OnInit {
  @Input() public obj: AbreviaturaModel = new AbreviaturaModel();

  constructor() {}

  ngOnInit(): void {}
}
