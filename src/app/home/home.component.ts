import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup =  new FormGroup({});
  user:any={}



  constructor(private router:Router) { }

  ngOnInit(): void {
    this.createForm()
  }

  get userlogin(){
    return this.loginForm?.get('userlogin') as FormControl;
  }

  get passlogin(){
    return this.loginForm?.get('passlogin') as FormControl;
  }

  createForm(){
    this.loginForm = new FormGroup({
      userlogin: new FormControl(null, [Validators.required]),
      passlogin: new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  }


  lucas(){
    alert("sou eu!")
  }

  iniciar(){


    var dados:any = localStorage.getItem('Users');
    var dados_user = JSON.parse(dados); //dados user que estão guardados na local
    var dados_restantes:any;

    if(this.loginForm.invalid){
      return;
    }
    this.user = Object.assign(this.user, this.loginForm?.value);

    if(dados_user == null || dados_user?.length == 0){
      alert("ERROR!");
      return;
    }

   for(let i=0; i < dados_user.length; i++){
    if(dados_user[i].username === this.user.userlogin && dados_user[i].password === this.user.passlogin){
      dados_user[i].logged = true;
      localStorage.removeItem(dados_user[i]);
      localStorage.setItem('Users', JSON.stringify(dados_user));
      alert('2');
      this.router.navigate(['logado']);
    }
    else{
      alert('ERROR! Invalid data');
    }
   }
  }
}
