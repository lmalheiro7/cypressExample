import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { AuthGuardService } from './guards/auth.guard.service';
import { LoggedGuard } from './guards/logged.guard';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', loadChildren: () => import('./home/home.module').then(mod=>mod.HomeModule), canActivate: [AuthGuardService]},
  //{path:'teste', component: RegisterComponent},
  //UTILIZANDO LAZY LOADING
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(mod=>mod.RegisterModule)
  },
  {
    path: 'logado',
    loadChildren: () => import('./logado/logado.module').then(mod=>mod.LogadoModule), canActivate:[LoggedGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
