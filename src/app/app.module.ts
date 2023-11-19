import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './screens/home/home.component';
import { PersonalComponent } from './screens/personal/personal.component';
import { ProductosComponent } from './screens/productos/productos.component';
import { ContactoComponent } from './screens/contacto/contacto.component';
import { TiendaComponent } from './screens/tienda/tienda.component';
import { RegistroComponent } from './screens/registro/registro.component';
import { Error404Component } from './screens/error404/error404.component';
import { TablaProductoComponent } from './components/tabla-producto/tabla-producto.component';
import { DetalleProductoComponent } from './screens/detalle-producto/detalle-producto.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablaAdminComponent } from './components/tabla-admin/tabla-admin.component';
import { AdministracionComponent } from './screens/administracion/administracion.component';
import { FormRegistroComponent } from './components/form-registro/form-registro.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    PersonalComponent,
    ProductosComponent,
    ContactoComponent,
    TiendaComponent,
    RegistroComponent,
    Error404Component,
    TablaProductoComponent,
    DetalleProductoComponent,
    TablaAdminComponent,
    AdministracionComponent,
    FormRegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
