import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationComponent } from './components/organization/organization.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/user-handling/login/login.component';
import { RegisterComponent } from './components/user-handling/register/register.component';
import { ProfileComponent } from './components/user-handling/profile/profile.component';
// import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
    // Note: may need to add a component that contains all of the components
    // in order to get all the important components to display in each
    // route (I hope that makes sense)
    
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    // { path: ':username', component: ProfileComponent}, // users profile page
    { path: 'profile', component: ProfileComponent }, // users custom profile page. Not sure how to do this yet
    // such that it can only access current user's profile page

    { path: 'school/welcome', component: OrganizationComponent},
    { path: 'school/general', component: OrganizationComponent},
    { path: 'school/server-specific', component: OrganizationComponent},

    { path: 'gym/welcome', component: OrganizationComponent},
    { path: 'gym/general', component: OrganizationComponent},
    { path: 'gym/server-specific', component: OrganizationComponent},

    { path: 'camping/welcome', component: OrganizationComponent},
    { path: 'camping/general', component: OrganizationComponent},
    { path: 'camping/server-specific', component: OrganizationComponent},

    { path: 'school', redirectTo: 'school/welcome', pathMatch: 'full' },
    { path: 'gym', redirectTo: 'gym/welcome', pathMatch: 'full'  },
    { path: 'camping', redirectTo: 'camping/welcome', pathMatch: 'full' },

    // wild card route, anything link that isn't above links to NotFoundComponent
    { path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
