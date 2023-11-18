import { Component } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito/carrito.service';
import { ProductoService } from 'src/app/services/productos/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent {
  carrito: any[] = [];  

  constructor(private carritoService: CarritoService, private serviceprod: ProductoService,private ruta: Router) {}

  ngOnInit() {
    
    this.carrito = this.carritoService.getCarrito();
  }
  cerrar(){
    localStorage.setItem("login","false")
    this.ruta.navigate([""])
  }

}
