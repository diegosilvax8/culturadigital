import { NgModule } from '@angular/core';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: ProyectosComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [ProyectosComponent],
    exports: [
        RouterModule
    ]
})
export class ProyectosModule { }