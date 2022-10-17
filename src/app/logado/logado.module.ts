import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogadoRoutingModule } from './logado-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LogadoComponent } from './logado.component';


@NgModule({
  declarations: [LogadoComponent],
  imports: [
    CommonModule,
    LogadoRoutingModule,
    ReactiveFormsModule
  ]
})
export class LogadoModule {}
