import { Component } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito/carrito.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent {
  carrito: any[] = [];  

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    
    this.carrito = this.carritoService.getCarrito();
  }


}
