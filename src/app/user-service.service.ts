import { Injectable } from '@angular/core';
import { dadosUser } from './dados';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor() {}

  addUser(user: dadosUser) {
    let users = [];
    if (localStorage.getItem('Users')) {
      var dados: any = localStorage.getItem('Users');
      var dados_user = JSON.parse(dados);
      users = dados_user;
      users = [user, ...users];
    } else {
      users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }

  validateUser(user: dadosUser) {
    var dados: any = localStorage.getItem('Users');
    var dados_user = JSON.parse(dados);
    if(dados == null){
      return false;
    }
    else{
    for (var x of dados_user) {
      console.log(x.username + " user: " + user.username);
      if(x.username === user.username){
        return true;
      }
    }
  }
    return false;
  }
}
