// Added Admin Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Login Module Changes
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, IndexComponent],
  exports : [
    LoginComponent,
    IndexComponent
  ]
})
export class AdminModule { }
