import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { AbreviaturaModel } from '../models/abreviatura.model';
import abreviaturasJson from '../jsons/abreviaturas.json';
import { CONSTANTS } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class AbreviaturasService {
  private abreviacoes: AbreviaturaModel[] = abreviaturasJson;

  constructor() {}

  public obterAbreviaturas(): Observable<AbreviaturaModel[]> {
    return of(this.abreviacoes).pipe(
      delay(CONSTANTS.DELAY),
      map((array) => {
        return array.sort((x, y) => {
          return x.nome > y.nome ? 1 : -1;
        });
      })
    );
  }

  public obterAbreviaturasPorSlug(slug: string): Observable<AbreviaturaModel> {
    const abreviatura = this.abreviacoes.find((abreviatura) => abreviatura.slug === slug);
    return of(abreviatura as AbreviaturaModel);
  }
}
