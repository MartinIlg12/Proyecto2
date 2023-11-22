import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  
  private carrito: any[] = [];

  getCarrito(): any[] {
    return this.carrito;
  }

  setCarrito(nuevoCarrito: any[]): void {
    this.carrito = nuevoCarrito;
  }


}
