import { Routes } from '@angular/router';
import { CategoriaComponent } from '../categoria/categoria.component';
import { ReglamentoComponent } from '../reglamento/reglamento.component';
import { ReservaComponent } from '../reserva/reserva.component';
import { ConsultaComponent } from '../consulta/consulta.component';


export const dashboardRoutes: Routes = [
    { path: '', component: CategoriaComponent },
    { path: 'categoria', component: CategoriaComponent },
    { path: 'reglamento', component: ReglamentoComponent },
    { path: 'reserva', component: ReservaComponent },
    { path: 'consulta', component: ConsultaComponent }
    
];
