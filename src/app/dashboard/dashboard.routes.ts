import { Routes } from '@angular/router';
import { CategoriaComponent } from '../categoria/categoria.component';
import { ReglamentoComponent } from '../reglamento/reglamento.component';
import { ReservaComponent } from '../reserva/reserva.component';
import { ConsultaComponent } from '../consulta/consulta.component';
import { AuthenticateRoute } from '../shared/authroutes';
import { HandlerComponent } from '../handler/handler.component';

export const dashboardRoutes: Routes = [
    { path: '', component: HandlerComponent},
    { path: 'categoria', component: CategoriaComponent, canActivate: [AuthenticateRoute]},
    { path: 'reglamento', component: ReglamentoComponent, canActivate: [AuthenticateRoute]},
    { path: 'reserva', component: ReservaComponent, canActivate: [AuthenticateRoute]},
    { path: 'consulta', component: ConsultaComponent, canActivate: [AuthenticateRoute]}
    
];
