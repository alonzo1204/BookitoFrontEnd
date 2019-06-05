import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

// Módulos
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IngresoEgresoComponent } from './ingreso-egreso/ingreso-egreso.component';
import { EstadisticaComponent } from './ingreso-egreso/estadistica/estadistica.component';
import { DetalleComponent } from './ingreso-egreso/detalle/detalle.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ReglamentoComponent } from './reglamento/reglamento.component';


import { HttpClientModule } from '@angular/common/http';

//Services
import { CategoriapersonalizadaAPIService } from './services/categoriapersonalizada-api.service';
import { CategoriapredefinidaAPIService } from './services/categoriapredefinida-api.service';
import { ClienteAPIService } from './services/cliente-api.service';
import { MetaahorroAPIService } from './services/metaahorro-api.service';
import { RecompensaAPIService } from './services/recompensa-api.service';
import { TransaccionAPIService } from './services/transaccion-api.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    IngresoEgresoComponent,
    EstadisticaComponent,
    DetalleComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CategoriaComponent,
    ReglamentoComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CategoriapersonalizadaAPIService, CategoriapredefinidaAPIService, ClienteAPIService, MetaahorroAPIService, RecompensaAPIService, TransaccionAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
