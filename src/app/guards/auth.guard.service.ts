import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    var dados:any = localStorage.getItem('Users');
    var dados_user = JSON.parse(dados);

    if(dados_user == null){
      return true;
    }
    for(let i=0; i < dados_user.length; i++){

      if(dados_user[i].logged == true){
        alert('estou aqui')
        this.router.navigate(['/logado']);

        return false;
      }
    }



    return true;
  }
}

