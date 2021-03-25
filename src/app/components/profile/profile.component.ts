import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

/* Service */
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  //Variable que contiene el formulario de profile
  profileForm = new FormGroup({
    name: new FormControl(this.userService.newUser.name),
    lastName: new FormControl(this.userService.newUser.lastName),
    age: new FormControl(this.userService.newUser.age),
    dayBirth: new FormControl(this.userService.newUser.dayBirth),
    password: new FormControl(this.userService.newUser.password),
  });


  // Actualiza los datos del usuario
  updateProfile(form:any) {
      let res = this.userService.register(form);

      if(res) {
        alert("Datos actualizados correctamente !");
      }
  }

  // Cierra sesión
  singOut() {
    this.userService.singOutAuth();
    this.router.navigate(['/'])
  }

}
