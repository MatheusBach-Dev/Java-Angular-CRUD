import { Routes } from '@angular/router';
import { ComidaForm } from './pages/comida-form/comida-form';
import { ComidaEdicao } from './pages/comida-edicao/comida-edicao';
import { Home } from './pages/home/home';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'nova', component: ComidaForm },
  { path: 'editar/:id', component: ComidaEdicao }
];
