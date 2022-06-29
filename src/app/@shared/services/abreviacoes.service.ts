import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { AbreviacaoModel } from '../models/abreviacao.model';
import abreviacoesJson from '../jsons/abreviacoes.json';
import { CONSTANTS } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class AbreviacaoService {
  private abreviacoes: AbreviacaoModel[] = abreviacoesJson;

  constructor() {}

  public obterAbreviacoes(): Observable<AbreviacaoModel[]> {
    return of(this.abreviacoes).pipe(
      delay(CONSTANTS.DELAY),
      map((array) => {
        return array.sort((x, y) => {
          return x.nome > y.nome ? 1 : -1;
        });
      })
    );
  }

  public obterAbreviacaoPorSlug(slug: string): Observable<AbreviacaoModel> {
    const abreviacao = this.abreviacoes.find((abreviacao) => abreviacao.slug === slug);
    return of(abreviacao as AbreviacaoModel);
  }
}
