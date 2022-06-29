import { Component, Input, OnInit } from '@angular/core';
import { AbreviacaoModel } from '@app/@shared/models/abreviacao.model';

@Component({
  selector: 'app-abreviacao',
  templateUrl: './abreviacao.component.html',
  styleUrls: ['./abreviacao.component.scss'],
})
export class AbreviacaoComponent implements OnInit {
  @Input() public obj: AbreviacaoModel = new AbreviacaoModel();

  constructor() {}

  ngOnInit(): void {}
}
