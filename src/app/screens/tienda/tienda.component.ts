import { Component } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito/carrito.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent {
  carrito: any[] = [];  // Puedes inicializarlo como un array vacío o según tu lógica de estado del carrito

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    // Si el carrito está almacenado en un servicio, puedes inicializarlo aquí
    this.carrito = this.carritoService.getCarrito();
  }


}
