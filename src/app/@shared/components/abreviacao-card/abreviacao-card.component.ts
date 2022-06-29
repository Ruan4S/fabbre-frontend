import { Component, Input, OnInit } from '@angular/core';
import { AbreviacaoModel } from '@app/@shared/models/abreviacao.model';

@Component({
  selector: 'app-abreviacao-card',
  templateUrl: './abreviacao-card.component.html',
  styleUrls: ['./abreviacao-card.component.scss'],
})
export class AbreviacaoCardComponent implements OnInit {
  @Input() public obj: AbreviacaoModel = new AbreviacaoModel();

  constructor() {}

  ngOnInit(): void {}
}
