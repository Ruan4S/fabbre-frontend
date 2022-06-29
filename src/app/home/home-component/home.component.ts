import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { AbreviaturaModel } from '@app/@shared/models/abreviatura.model';
import { AbreviaturasService } from '@app/@shared/services/abreviaturas.service';
import { map, Observable, startWith, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('inputPesquisa') public inputPesquisa: NgModel;
  public inputPesquisaValue: string;
  public abreviaturas: AbreviaturaModel[] = [];
  public abreviaturasFiltradas: Observable<AbreviaturaModel[]>;
  public nenhumaAbreviatura: boolean = false;
  public ordemArray: 0 | 1 = 1;
  public busy$: Subscription[] = [];

  constructor(private readonly abreviaturasService: AbreviaturasService) {}

  ngOnInit() {
    this.obterAbreviaturas();
  }

  public obterAbreviaturas() {
    this.busy$.push(
      this.abreviaturasService.obterAbreviaturas().subscribe({
        next: (result) => {
          this.abreviaturas = result;
        },
        complete: () => {
          this.escutarMudancasInputPesquisar();
        },
      })
    );
  }

  private escutarMudancasInputPesquisar() {
    this.abreviaturasFiltradas = this.inputPesquisa.valueChanges.pipe(
      startWith(''),
      map((value: string) => {
        const arrayFiltrado = this.filtrarAbreviatura(value);

        arrayFiltrado.length === 0 ? (this.nenhumaAbreviatura = true) : (this.nenhumaAbreviatura = false);

        return arrayFiltrado;
      })
    );
  }

  private filtrarAbreviatura(value: string) {
    const valorFiltrado = value?.toLowerCase();

    return this.abreviaturas.filter((abreviatura) => abreviatura.nome.toLowerCase().includes(valorFiltrado));
  }

  public mudarOrdem() {
    this.inputPesquisa.reset();
    this.ordemArray ? (this.ordemArray = 0) : (this.ordemArray = 1);

    this.abreviaturasFiltradas = this.abreviaturasFiltradas.pipe(
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
