import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

// Módulos
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ReglamentoComponent } from './reglamento/reglamento.component';
import { ReservaComponent } from './reserva/reserva.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { AuthenticateRoute } from './shared/authroutes';

import { HttpClientModule } from '@angular/common/http';

//Services
import { CategoriaService } from './services/categoria.service';
import { AuthenticationService } from './services/authentication.service';
import { HandlerComponent } from './handler/handler.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CategoriaComponent,
    ReglamentoComponent,
    ReservaComponent,
    ConsultaComponent,
    HandlerComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CategoriaService,AuthenticationService,AuthenticateRoute],
  bootstrap: [AppComponent]
})
export class AppModule { }
