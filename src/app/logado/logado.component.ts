import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-logado',
  templateUrl: './logado.component.html',
  styleUrls: ['./logado.component.css']
})
export class LogadoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {}

  logout(){
    var dados:any = localStorage.getItem('Users');
    var dados_user = JSON.parse(dados);
    var logout: boolean=false;
    var i: number=0;

    console.log(dados_user);

    if(dados_user == null){
      this.router.navigate(["/home"]);
      return;
    }

    for(i=0; i < dados_user.length; i++){
      if(dados_user[i].logged = true){
        dados_user[i].logged =  logout;
        localStorage.removeItem(dados_user);
        localStorage.setItem('Users', JSON.stringify(dados_user))
      }
    }
    this.router.navigate(["/home"]);

  }

}
