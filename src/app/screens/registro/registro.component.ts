import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { getDatabase, ref, child, get } from "firebase/database";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  nick: any;
  pass: any;
  rol: any;

  constructor(private servicio: UsuariosService, private ruta: Router) {}

  login(formulario: any): void {
    const temp = formulario.value;
  
    this.servicio.getUsuarios().subscribe((response: any) => {
      if (!response) {
        console.error("La respuesta del servicio es nula");
        return;
      }
  
      // Si la respuesta tiene el campo 'usuario', úsalo, de lo contrario, asume que es el objeto de usuario directo
      const usuarios = response.usuario || response;
  
      let accesoCorrecto = false;
  
      for (const key in usuarios) {
        const user = usuarios[key];
  
        if (temp.nick === user.nick && temp.pass === user.pass && temp.rol === user.rol) {
          accesoCorrecto = true;
  
          if (user.rol === "admin") {
            localStorage.setItem("login", "true");
            localStorage.setItem("login-admin", "true");
            this.ruta.navigate([""]);
          } else if (user.rol === "usuario") {
            localStorage.setItem("login", "true");
            localStorage.setItem("login-admin", "false");
            this.ruta.navigate([""]);
          } else if (user.rol === "visitante") {
            localStorage.setItem("login", "false");
            localStorage.setItem("login-admin", "false");
            this.ruta.navigate([""]);
          }
          break; // Termina el bucle una vez que se encuentra el usuario
        }
      }
  
      if (!accesoCorrecto) {
        alert("Credenciales incorrectas");
        console.log(temp);
        console.log(response);
      }
    }, (error) => {
      console.error("Error al obtener usuarios:", error);
    });
  }}

