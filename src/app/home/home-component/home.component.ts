import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { AbreviacaoModel } from '@app/@shared/models/abreviacao.model';
import { AbreviacaoService } from '@app/@shared/services/abreviacoes.service';
import { map, Observable, of, startWith, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('inputPesquisa') public inputPesquisa: NgModel;
  public inputPesquisaValue: string;
  public abreviacoes: AbreviacaoModel[] = [];
  public abreviacoesFiltradas: Observable<AbreviacaoModel[]>;
  public nenhumaAbreviacao: boolean = false;
  public ordemArray: 0 | 1 = 1;
  public busy$: Subscription[] = [];

  constructor(private readonly abreviacoesService: AbreviacaoService, private readonly cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.obterAbreviacoes();
  }

  public obterAbreviacoes() {
    this.busy$.push(
      this.abreviacoesService.obterAbreviacoes().subscribe({
        next: (result) => {
          this.abreviacoes = result;
        },
        complete: () => {
          this.escutarMudancasInputPesquisar();
        },
      })
    );
  }

  private escutarMudancasInputPesquisar() {
    this.abreviacoesFiltradas = this.inputPesquisa.valueChanges.pipe(
      startWith(''),
      map((value: string) => {
        const arrayFiltrado = this.filtrarAbreviacao(value);

        arrayFiltrado.length === 0 ? (this.nenhumaAbreviacao = true) : (this.nenhumaAbreviacao = false);

        return arrayFiltrado;
      })
    );
  }

  private filtrarAbreviacao(value: string) {
    const valorFiltrado = value?.toLowerCase();

    return this.abreviacoes.filter((abreviacao) => abreviacao.nome.toLowerCase().includes(valorFiltrado));
  }

  public mudarOrdem() {
    this.inputPesquisa.reset();
    this.ordemArray ? (this.ordemArray = 0) : (this.ordemArray = 1);

    this.abreviacoesFiltradas = this.abreviacoesFiltradas.pipe(
      map((array) => {
        return array.sort((a, b) => {
          if (this.ordemArray) {
            return a.nome > b.nome ? 1 : -1;
          } else {
            return a.nome < b.nome ? 1 : -1;
          }
        });
      })
    );
  }
}
