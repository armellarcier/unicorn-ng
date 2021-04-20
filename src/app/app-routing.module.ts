import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ManageUnicornComponent } from './manage-unicorn/manage-unicorn.component';
import { UnicornGuard } from './shared/guards/unicorn.guard';
import { ShowUnicornComponent } from './show-unicorn/show-unicorn.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'unicorns/new',
        component: ManageUnicornComponent,
    },
    {
        path: 'unicorns/:id',
        component: ShowUnicornComponent,
    },
    {
        path: 'unicorns/:id/edit',
        component: ManageUnicornComponent,
        canActivate: [UnicornGuard],
    },
    {
        path: 'admin',
        loadChildren: () => import('./pages/admin/admin.module').then(({ AdminModule }) => AdminModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
