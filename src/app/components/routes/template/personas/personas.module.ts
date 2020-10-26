import { NgModule } from '@angular/core';
import { PersonasComponent } from './personas/personas.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: PersonasComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [PersonasComponent],
    exports: [
        RouterModule
    ]
})
export class PersonasModule { }