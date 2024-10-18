import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ListingComponent } from './pages/listing/listing.component';
import { ItemComponent } from './pages/item/item.component';
import { EditComponent } from './pages/edit/edit.component';
import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';
import { CreateComponent } from './pages/create/create.component';

export const routes: Routes = [
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'list', component: ListingComponent, canActivate:[authGuard]
    },
    {
        path: 'item/:id', component: ItemComponent, canActivate:[authGuard]
    },
    {
        path: 'item/:id/edit', component: EditComponent, canActivate:[authGuard, adminGuard]
    },
    {
        path: 'create', component: CreateComponent, canActivate:[authGuard, adminGuard]
    },
];
