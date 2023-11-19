import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  
  constructor(private servicio: UsuariosService, private ruta: Router) {}

  nick: any;
  pass: any;
  rol: any;

  login(formulario: any): void {
    const temp = formulario.value;

    this.servicio.getUsuarios().subscribe((response: any) => {
      if (response.nick === temp.nick && response.pass === temp.pass && response.rol === temp.rol) {
        alert("Acceso Correcto");

        if(response.rol=== "admin"){
          localStorage.setItem("login","true");
          localStorage.setItem("admin","true");
          this.ruta.navigate([""])
        }else if(response.rol=== "usuario"){
          localStorage.setItem("login","true");
          localStorage.setItem("admin","false");
          this.ruta.navigate([""])

        } else if(response.rol=== "visitante")
        localStorage.setItem("login","false");
          localStorage.setItem("admin","false");
          this.ruta.navigate([""])
      } else {
        alert("Credenciales incorrectas");
        
      }
    }, (error) => {
      console.error("Error al obtener usuarios:", error);
    
    });
  }
  
  }

