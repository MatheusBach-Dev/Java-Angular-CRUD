import { Routes } from '@angular/router';
import { ComidaForm } from './pages/comida-form/comida-form';
import { Home } from './pages/home/home';


export const routes: Routes = [
    { path: '', component: Home},
    { path: 'nova', component: ComidaForm}
];
