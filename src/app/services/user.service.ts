import { Injectable, Type } from '@angular/core';

/* Model */
import { User } from '../model/user';
import { UserSession } from '../model/userSession';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
    
   }

  // variable que almacena los datos del usuario registrado
  newUser:User = {
    name: "",
    lastName: "",
    age:0,
    dayBirth: "",
    password: ""
  };
  
  //  Varibale que nos permite saber si el usuario se a autenticado
  isAuth:boolean = false;

  /* Metodos que dan acceso al usuario */
  singOnAuth(){
    this.isAuth = true;
  }

  singOutAuth() {
    this.isAuth = false;
  }

  // Metodo para registrar un nuevo usuario
  register(user:User):boolean{
    try {
      this.newUser = {
        name: user.name,
        lastName:user.lastName,
        age: user.age,
        dayBirth:user.dayBirth,
        password:user.password 
      }

      return true;

    } catch (error) {
      console.log(error);
      return false;
    }

    return false;
  }

  
  validateUser(formUser:UserSession):any {
    // Variable que alamcena la respuesta del usuario logiado
    let response = {
      response: false,
      message: {},
    };

    // Condición que verifica si el usuario existe 
    if (this.newUser) {

      //Verifico si el usuario es igual al usuario registrado
      if (formUser.username == this.newUser.name) {

        // Verifico si la contraseña es igual al del usuario registrado
        if(formUser.password == this.newUser.password) {
            response.response = true;

        } else {
          response.message = {
            error: "Contraseña incorrecto"
          }
        }

      } else {
        response.message = {
          error: "Usuario incorrecto"
        }          
      }

    } else {
      // Respondo con un mensaje de "Datos incorrectos" ya que el usuario no existe
      response.message = "Datos incorrectos";
    }

    return response;
          
  }
}
