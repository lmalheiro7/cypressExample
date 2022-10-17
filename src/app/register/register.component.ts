import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup =  new FormGroup({});
  user: any={};


  constructor(private form: FormBuilder, private userService:UserServiceService, private router:Router){}


  ngOnInit(): void {
    this.createForm(this.user);
  }

  get username(){
    return this.registerForm?.get('username') as FormControl;
  }

  get password(){
    return this.registerForm?.get('password') as FormControl;
  }

  get logged(){
    return this.registerForm?.get('logged') as FormControl;
  }

  createForm(user:any){
    this.registerForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      logged: new FormControl(false, null)
    })
  }

  onSubmit(){
    if (this.registerForm.invalid) {
      return;
  }
    this.user = Object.assign(this.user, this.registerForm?.value);
    if(this.userService.validateUser(this.user)){
      alert('User já existe');
    }else{
      this.userService.addUser(this.user);
      //localStorage.setItem('Users', JSON.stringify(this.user));
      alert('Registou um utilizador com sucesso.');
      this.router.navigate(["/home"]);
   }
  }
}
