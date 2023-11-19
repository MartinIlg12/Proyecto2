import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/productos/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-admin',
  templateUrl: './tabla-admin.component.html',
  styleUrls: ['./tabla-admin.component.css']
})
export class TablaAdminComponent {

  constructor(private servicio: ProductoService,private router: Router) {}

  ide: any;
  nombre: any;
  plataforma:any;
  precio: any;
  descuento:any;
  descripcion: any;
  imagen: any;
  stock:any

  dataProducto:any={};
  ngOnInit(){
    this.servicio.getProducts().subscribe(producto=>{
      this.dataProducto=producto
    })
  }

  guardarProducto(id: any, nombre: any,plataforma:any,precio:any,descuento:any, descripcion:any, imagen: any, stock:any) {
    const temp = +id;
    const tempv = +precio;
    const tempd= +descuento;
    const temps= +stock

    const producto = {
      id: temp,
      nombre: nombre,
      plataforma:plataforma,
      precio: tempv,
      descuento:tempd,
      descripcion: descripcion,
      imagen: imagen,
      stock:temps
    };

    this.servicio.postProductos(producto).subscribe(() => {
      
      alert('Producto guardado exitosamente');
      this.router.navigate(['/administracion']); 
    },
    (error) => {
      console.error('Error al guardar producto:', error);
      alert('Error al guardar producto. Por favor, inténtalo de nuevo.');
      
    });
  }

  editarProductos(id: any, nombre: any,plataforma:any,precio:any,descuento:any, descripcion:any, imagen: any, stock:any) {
    const temp = +id;
    const tempv = +precio;
    const tempd= +descuento;
    const temps= +stock

    const producto = {
      id: temp,
      nombre: nombre,
      plataforma:plataforma,
      precio: tempv,
      descuento:tempd,
      descripcion: descripcion,
      imagen: imagen,
      stock:temps
    };

    this.servicio.putProductos(producto, temp).subscribe(() => {
      alert('Producto editado exitosamente');
      this.router.navigate(['administracion']); 
     
    },
    (error) => {
      console.error('Error al editar producto:', error);
      alert('Error al editar producto. Por favor, inténtalo de nuevo.');
     
    });
  }

  eliminarProductos(id: any) {
    this.servicio.deleteProducto(id).subscribe(() => {
      alert('Producto eliminado exitosamente');
      this.router.navigate(['administracion'])
    },
    (error) => {
      console.error('Error al eliminar producto:', error);
      alert('Error al eliminar producto. Por favor, inténtalo de nuevo.');
     
    });
  }
}
