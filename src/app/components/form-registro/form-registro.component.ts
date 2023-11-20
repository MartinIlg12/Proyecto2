import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent {
  
  nick: any;
  pass: any;
  rol: any;
  constructor(private servicio: UsuariosService, private ruta: Router) {}

  guardarUsuario(): void {
    const usuario = {
      
      nick: this.nick,
      pass: this.pass,
      rol: this.rol
    };

    this.servicio.postUsuarios(usuario).subscribe(() => {
      alert("Registro Completo");
      this.ruta.navigate([""]);

    });
  }
}
