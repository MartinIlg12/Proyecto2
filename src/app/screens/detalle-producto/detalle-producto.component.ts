import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/productos/producto.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  detalleProducto : any ={}
  constructor(private detalleprod : ProductoService){}

  ngOnInit() {
      this.detalleprod.getDetalleProducts('id', 'nombre').subscribe(detalleproducto =>{
        this.detalleProducto=detalleproducto;
      })
  }
  }

