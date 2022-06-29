import { SessionStorageService } from 'ngx-webstorage';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SessionStorage } from 'ngx-webstorage';
import { AbreviaturaModel } from '@app/@shared/models/abreviatura.model';

@Component({
  selector: 'app-abreviatura',
  templateUrl: './abreviatura.component.html',
  styleUrls: ['./abreviatura.component.scss'],
})
export class AbreviaturaComponent implements OnInit, OnDestroy {
  @SessionStorage() abreviatura: AbreviaturaModel;

  constructor(private readonly titleService: Title, private readonly sessionSt: SessionStorageService) {}

  ngOnInit(): void {
    this.titleService.setTitle(`${this.abreviatura.nome} | Fabbre`);
  }

  ngOnDestroy(): void {
    this.sessionSt.clear();
  }
}
