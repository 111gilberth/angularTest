import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';
/* Model */
import { UserSession } from 'src/app/model/userSession';
/* Service */
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private userService:UserService, 
    private route:Router,
    ) 
    {
      
    }

   ngOnInit(): void {
  }

  alertMessageError:string = "";

  //  Variabel que almacena los datos de sesión
  singForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  
  
  // Metodo que inicia sesión
  onSingIn(form:UserSession) {
   let response = this.userService.validateUser(form);
   /* console.log(response); */

   // Vericamos si todo esta bien
   if (response.response) {
    this.userService.singOnAuth();
    this.route.navigate(['home']);
	  this.alertMessageError = "";
    
   } else {

     if(response.message.error) {
      this.alertMessageError = response.message.error;
     } else {
      this.alertMessageError = response.message;
     }      
   }
    
  }
}
