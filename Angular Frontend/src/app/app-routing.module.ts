import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationComponent } from './components/organization/organization.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/user-handling/login/login.component';
import { RegisterComponent } from './components/user-handling/register/register.component';

const routes: Routes = [
    // Note: may need to add a component that contains all of the components
    // in order to get all the important components to display in each
    // route (I hope that makes sense)
    // TODO: start here to delete things and start with a different method
    // skewl redirects --> skewl/general
    
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},

    { path: 'skewl/welcome', component: OrganizationComponent},
    { path: 'skewl/general', component: OrganizationComponent},
    { path: 'skewl/server-specific', component: OrganizationComponent},
    
    // { path: 'skewl/general', component: OrganizationComponent},
    // { path: 'skewl/server-specific', component: OrganizationComponent},

    { path: 'gym/welcome', component: OrganizationComponent},
    { path: 'gym/general', component: OrganizationComponent},
    { path: 'gym/server-specific', component: OrganizationComponent},

    { path: 'boys_only/welcome', component: OrganizationComponent},
    { path: 'boys_only/general', component: OrganizationComponent},
    { path: 'boys_only/server-specific', component: OrganizationComponent},

    { path: 'skewl', redirectTo: 'skewl/welcome', pathMatch: 'full' },
    { path: 'gym', redirectTo: 'gym/welcome', pathMatch: 'full'  },
    { path: 'boys_only', redirectTo: 'boys_only/welcome', pathMatch: 'full' },

    // wild card route, will become a NotFoundComponent once we create it
    { path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
