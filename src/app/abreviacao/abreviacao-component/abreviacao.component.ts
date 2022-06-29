import { SessionStorageService } from 'ngx-webstorage';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AbreviacaoModel } from '@app/@shared/models/abreviacao.model';
import { SessionStorage } from 'ngx-webstorage';

@Component({
  selector: 'app-abreviacao',
  templateUrl: './abreviacao.component.html',
  styleUrls: ['./abreviacao.component.scss'],
})
export class AbreviacaoComponent implements OnInit, OnDestroy {
  @SessionStorage() abreviacao: AbreviacaoModel;

  constructor(private readonly titleService: Title, private readonly sessionSt: SessionStorageService) {}

  ngOnInit(): void {
    this.titleService.setTitle(`${this.abreviacao.nome} | Fabbre`);
  }

  ngOnDestroy(): void {
    this.sessionSt.clear();
  }
}
