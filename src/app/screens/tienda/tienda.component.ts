import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito/carrito.service';
import { ProductoService } from 'src/app/services/productos/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  carrito: any[] = [];  

  constructor(private carritoService: CarritoService, private serviceprod: ProductoService,private ruta: Router) {}

  ngOnInit() {
    
    this.carrito = this.carritoService.getCarrito();
  }
  cerrar(){
    localStorage.setItem("login-admin","false")
    localStorage.setItem("login","false")
    this.ruta.navigate([""])
  }
  guardarCarrito(): void {
    // Llama al servicio para guardar el carrito en la tienda
    this.serviceprod.guardarCarritoEnTienda(this.carrito);
    // Redirige a la página de la tienda
    // Ajusta la ruta según tu configuración de enrutamiento
    this.ruta.navigate(['tienda']);
  }

}
