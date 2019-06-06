import { Routes } from '@angular/router';
import { EstadisticaComponent } from '../ingreso-egreso/estadistica/estadistica.component';
import { IngresoEgresoComponent } from '../ingreso-egreso/ingreso-egreso.component';
import { CategoriaComponent } from '../categoria/categoria.component';
import { DetalleComponent } from '../ingreso-egreso/detalle/detalle.component';
import { ReglamentoComponent } from '../reglamento/reglamento.component';
import { ReservaComponent } from '../reserva/reserva.component';
import { RecomendacionesComponent} from '../recomendaciones/recomendaciones.component';
import { ConsultaComponent } from '../consulta/consulta.component';


export const dashboardRoutes: Routes = [
    { path: '', component: EstadisticaComponent },
    { path: 'ingreso-egreso', component: IngresoEgresoComponent },
    { path: 'categoria', component: CategoriaComponent },
    { path: 'detalle', component: DetalleComponent },
    { path: 'reglamento', component: ReglamentoComponent },
    { path: 'recomendaciones', component: RecomendacionesComponent },
    { path: 'reserva', component: ReservaComponent },
    { path: 'consulta', component: ConsultaComponent }
    
];
