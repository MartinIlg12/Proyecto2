import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/productos/producto.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  Producto: any;

  constructor(private detalleprod: ProductoService, private ruta: ActivatedRoute) {}

  ngOnInit() {
    this.ruta.params.subscribe((parametros) => {
      const id = +parametros['id'];

      // Llamar al servicio para obtener detalles del producto por ID
      this.detalleprod.getDetalleProducts(id).subscribe(
        (producto) => {
          this.Producto = producto;
        },
        (error) => {
          console.error('Error al obtener detalles del producto', error);
        }
      );
    });
  }
  }

