import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MattableComponent } from './components/mattable/mattable.component';
import { TableComponent } from './components/table/table.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', component: MattableComponent},
  {path: 'table' , component: TableComponent},
  {path: '**' , component: PageNotFoundComponent}
];

export const appRouter = RouterModule.forRoot(routes);
