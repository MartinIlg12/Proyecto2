import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { PersonalComponent } from './screens/personal/personal.component';
import { ProductosComponent } from './screens/productos/productos.component';
import { RegistroComponent } from './screens/registro/registro.component';
import { ContactoComponent } from './screens/contacto/contacto.component';
import { timeInterval } from 'rxjs';
import { TiendaComponent } from './screens/tienda/tienda.component';
import { Error404Component } from './screens/error404/error404.component';
import { DetalleProductoComponent } from './screens/detalle-producto/detalle-producto.component';
import { carritoGuard } from './guards/carrito.guard';
import { AdministracionComponent } from './screens/administracion/administracion.component';
import { adminGuard } from './guards/admin/admin.guard';
import { RegistrarseComponent } from './screens/registrarse/registrarse.component';

const routes: Routes = [

  {path:"", component:HomeComponent},
  {path:"personal",component:PersonalComponent},
  {path:"productos",component:ProductosComponent},
  {path:"contacto",component:ContactoComponent},
  {path:"tienda",component:TiendaComponent, canActivate:[carritoGuard]},
  {path:"registro",component:RegistroComponent},
  {path:"administracion",component:AdministracionComponent, canActivate:[adminGuard]},
  {path:"detalles/:id",component:DetalleProductoComponent},
  {path:"registrarse",component:RegistrarseComponent},
  {path:"**",component:Error404Component}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
