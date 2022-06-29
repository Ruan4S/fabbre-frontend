import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { AbreviacaoModel } from '../models/abreviacao.model';
import abreviacoesJson from '../jsons/abreviacoes.json';
import { CONSTANTS } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class AbreviacoesService {
  private abreviacoes: AbreviacaoModel[] = abreviacoesJson;

  constructor() {}

  public obterAbreviacoes(): Observable<AbreviacaoModel[]> {
    return of(this.abreviacoes).pipe(delay(CONSTANTS.DELAY));
  }
}
