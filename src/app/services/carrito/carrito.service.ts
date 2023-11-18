import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carrito: any[] = [];

  constructor() {}

  addToCart(producto: any): void {
    this.carrito.push(producto);
    
  }

  getCarrito(): any[] {
    return this.carrito;
  }

  clearCarrito(): void {
    this.carrito = [];
    
  }
}
