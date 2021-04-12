import { Injectable, OnDestroy } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SubSink } from 'subsink';
import { PatientService } from '../services/patient/patient.service';

@Injectable({
  providedIn: 'root'
})
export class SetPasswordGuard implements CanActivate, OnDestroy {
  private subSink: SubSink;
  constructor(private patientService: PatientService,
              private router: Router) {
    this.subSink = new SubSink();
  }

  public ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("activated route snap", route.params.token);
      return this.patientService.setPasswordVerifyToken(route.params.token).pipe(map(res => {
        if (res.message === 'Token Valid.') {
          return true;
        } 

        return false;
      }), catchError(err => {
        this.router.navigateByUrl('/');
        return of(false);
      }));
  }
  
}
