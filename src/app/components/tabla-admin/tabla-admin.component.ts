import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/productos/producto.service';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-tabla-admin',
  templateUrl: './tabla-admin.component.html',
  styleUrls: ['./tabla-admin.component.css']
})
export class TablaAdminComponent {
  nick: any;
  pass: any;
  rol: any;

  constructor(private servicio: ProductoService,private router: Router,private serviciop: UsuariosService) {}

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
      window.location.reload()
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
      window.location.reload()
     
    },
    (error) => {
      console.error('Error al editar producto:', error);
      alert('Error al editar producto. Por favor, inténtalo de nuevo.');
     
    });
  }

  eliminarProductos(id: any) {
    this.servicio.deleteProducto(id).subscribe(() => {
      alert('Producto eliminado exitosamente');
      this.router.navigate(['administracion']);
      window.location.reload()
    },
    (error) => {
      console.error('Error al eliminar producto:', error);
      alert('Error al eliminar producto. Por favor, inténtalo de nuevo.');
     
    });
  }
  cerrar(){
    localStorage.setItem("login-admin","false")
    localStorage.setItem("login","false")
    this.router.navigate([""])
  }

  guardarUsuario(): void {
    const usuario = {
      
      nick: this.nick,
      pass: this.pass,
      rol: this.rol
    };

    this.serviciop.postUsuarios(usuario).subscribe(() => {
      alert("Registro Completo");
      window.location.reload()

    });
  }
  
}
