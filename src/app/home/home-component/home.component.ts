import { Component, OnInit } from '@angular/core';
import { AbreviacaoModel } from '@app/@shared/models/abreviacao.model';
import { AbreviacoesService } from '@app/@shared/services/abreviacoes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public abreviacoes: AbreviacaoModel[] = [];
  public busy$: Subscription[] = [];

  constructor(private readonly abreviacoesService: AbreviacoesService) {}

  ngOnInit() {
    this.obterAbreviacoes();
  }

  public obterAbreviacoes() {
    this.busy$.push(
      this.abreviacoesService.obterAbreviacoes().subscribe({
        next: (result) => {
          this.abreviacoes = result;
        },
      })
    );
  }
}
