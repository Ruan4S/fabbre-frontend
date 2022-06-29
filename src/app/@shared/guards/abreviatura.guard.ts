import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { SessionStorage, SessionStorageService } from 'ngx-webstorage';
import { catchError, map, Observable, of } from 'rxjs';
import { AbreviaturaModel } from '../models/abreviatura.model';
import { AbreviaturasService } from '../services/abreviaturas.service';

@Injectable({
  providedIn: 'root',
})
export class AbreviaturaGuard implements CanActivate {
  @SessionStorage() public abreviatura: AbreviaturaModel;

  constructor(
    private readonly abreviaturaService: AbreviaturasService,
    private readonly router: Router,
    private readonly sessionSt: SessionStorageService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.abreviaturaService.obterAbreviaturasPorSlug(route.params['slug']).pipe(
      map((x: AbreviaturaModel) => {
        if (x) {
          this.abreviatura = x;
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
