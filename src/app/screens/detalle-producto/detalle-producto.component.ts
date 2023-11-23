import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/productos/producto.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  detalleProducto : any[] =[];
  
  item : any = {}
  constructor(private detalleprod : ProductoService, private ruta: ActivatedRoute){}

  ngOnInit() {
    const idProducto = this.ruta.snapshot.params['id'];

    // Llamar al servicio para obtener los detalles del producto
    this.detalleProducto.getDetalleProductos(idProducto).subscribe(
      (data) => {
        this.detalleProducto = data;
      },
      (error) => {
        console.error('Error al obtener detalles del producto', error);
      }
    );
     
  }
  }

