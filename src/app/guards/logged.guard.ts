import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      var dados:any = localStorage.getItem('Users');
      var dados_user = JSON.parse(dados);

      if(dados_user == null){
        this.router.navigate(['/register']);
        return false;
      }


      for(let i=0; i < dados_user.length; i++){
        if(dados_user[i].logged == false){
          this.router.navigate(['/register']);

          return false;
      }
  }

  return true;
}

}
