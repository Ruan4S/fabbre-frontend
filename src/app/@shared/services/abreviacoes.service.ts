import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
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
    return of(this.abreviacoes).pipe(delay(CONSTANTS.DELAY));
  }

  public obterAbreviacaoPorSlug(slug: string): Observable<AbreviacaoModel> {
    const abreviacao = this.abreviacoes.find((abreviacao) => abreviacao.slug === slug);
    return of(abreviacao as AbreviacaoModel);
  }
}
