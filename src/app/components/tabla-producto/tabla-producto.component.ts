import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/productos/producto.service';
@Component({
  selector: 'app-tabla-producto',
  templateUrl: './tabla-producto.component.html',
  styleUrls: ['./tabla-producto.component.css']
})
export class TablaProductoComponent {
  dataProducto: any = {};

  constructor(private serviceprod: ProductoService) {}

  ngOnInit() {
    this.serviceprod.getProducts().subscribe(producto => {
      this.dataProducto = producto;
    });
  }

  addToCart(producto: any): void {
    this.serviceprod.addToCart(producto).subscribe(
      (response) => {
        console.log('Producto agregado al carrito:', response);
        // Aquí podrías realizar acciones adicionales si es necesario, como actualizar la interfaz de usuario
      },
      (error) => {
        console.error('Error al agregar al carrito:', error);
      }
    );
  }
}
