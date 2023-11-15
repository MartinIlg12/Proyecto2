import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/productos/producto.service';
@Component({
  selector: 'app-tabla-producto',
  templateUrl: './tabla-producto.component.html',
  styleUrls: ['./tabla-producto.component.css']
})
export class TablaProductoComponent {
  constructor(private serviceprod:ProductoService){}
  dataProducto:any={};
  ngOnInit(){
    this.serviceprod.getProducts().subscribe(producto=>{
      this.dataProducto=producto
    })
  }

}
