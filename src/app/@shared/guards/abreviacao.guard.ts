import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { SessionStorage, SessionStorageService } from 'ngx-webstorage';
import { catchError, map, Observable, of } from 'rxjs';
import { AbreviacaoModel } from '../models/abreviacao.model';
import { AbreviacaoService } from '../services/abreviacoes.service';

@Injectable({
  providedIn: 'root',
})
export class AbreviacaoGuard implements CanActivate {
  @SessionStorage() public abreviacao: AbreviacaoModel;

  constructor(
    private readonly abreviacaoService: AbreviacaoService,
    private readonly router: Router,
    private readonly sessionSt: SessionStorageService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.abreviacaoService.obterAbreviacaoPorSlug(route.params['slug']).pipe(
      map((e) => {
        if (e) {
          this.abreviacao = e;
          return true;
        } else {
          this.sessionSt.clear();
          this.router.navigateByUrl('/');
          return false;
        }
      }),
      catchError(() => {
        this.router.navigateByUrl('/');
        return of(false);
      })
    );
  }
}
