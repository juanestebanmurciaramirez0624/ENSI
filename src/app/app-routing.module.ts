import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserComponent } from './components/user/user.component';
import { SnackComponent } from './components/snack/snack.component';
import { CourseComponent } from './components/course/course.component';
import { AssignComponent } from './components/assign/assign.component';

//guards

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'}, //Al entrar redirige al index
  {path: 'index', component: IndexComponent}, //Crea la direccion /index
  {path: 'dashboard', component: DashboardComponent},
  {path: 'usuarios', component: UserComponent},
  {path: 'refrigerios', component: SnackComponent},
  {path: 'cursos', component: CourseComponent},
  {path: 'asignaciones', component: AssignComponent},
  {path: '**', redirectTo: 'index', pathMatch: 'full'}, //Si la url no coresponde a nada redirige al index
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
