import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
/* Model */
import { User } from 'src/app/model/user';
/* Service */
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userServices: UserService, private route:Router) { }

  ngOnInit(): void {
  }

  /* variable que almacena los datos del formualario nuevo usuario */
  registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      lastName : new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      dayBirth: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
  });

  // Registro nuevo usuario
  onSingUp(form:User) {
    let res = this.userServices.register(form);

    // Se verifica que todo este bien
    if(res) {
      alert('Registro existoso');
      this.route.navigate(['/']);

    }else {
      alert("Hubo un error! Intente de nuevo");
    }
  }

}
