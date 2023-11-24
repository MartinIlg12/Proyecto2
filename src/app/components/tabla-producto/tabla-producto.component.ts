import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/productos/producto.service';
@Component({
  selector: 'app-tabla-producto',
  templateUrl: './tabla-producto.component.html',
  styleUrls: ['./tabla-producto.component.css']
})
export class TablaProductoComponent {
  dataProducto: any = {};
  carrito: any[] = [];
  usuarioAutenticado: boolean = false;
  constructor(private serviceprod: ProductoService, private ruta:Router) {}

  ngOnInit() {
    this.serviceprod.getProducts().subscribe(producto => {
      this.dataProducto = producto;
    });
  }

  addToCart(producto: any): void {
    this.carrito.push(producto);
    console.log('Producto agregado al carrito:', producto);
    alert("Se agrego Correctamente continua comprando.")
    // Puedes realizar acciones adicionales aquí, como actualizar la interfaz de usuario
  }

  // Método para eliminar productos del carrito
  removeFromCart(producto: any): void {
    this.carrito = this.carrito.filter(item => item !== producto);
    console.log('Producto eliminado del carrito:', producto);
    // Puedes realizar acciones adicionales aquí, como actualizar la interfaz de usuario
  }

  // Método para guardar el carrito y navegar a la página de la tienda
  guardarCarrito(): void {
    this.serviceprod.guardarCarritoEnTienda(this.carrito);
    console.log('Guardando carrito:', this.carrito);
    // Puedes realizar acciones adicionales aquí, si es necesario
    // Por ejemplo, podrías limpiar el carrito después de guardarlo
    this.carrito = [];
    this.ruta.navigate(['tienda']);
  }
  
  
}
