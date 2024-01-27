import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationComponent } from './components/organization/organization.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/user-handling/login/login.component';
import { RegisterComponent } from './components/user-handling/register/register.component';
import { ProfileComponent } from './components/user-handling/profile/profile.component';

import { AuthGuard } from './guards/auth.guard';
import { UserGuard } from './guards/user.gaurd';

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { ConfigService } from 'src/services/config.service';
import { HttpClient } from '@angular/common/http';
import { ServerGuard } from './guards/server.guard';

const routes: Routes = [
    
    { path: 'login', component: LoginComponent},
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // default route
    
    { path: 'register', component: RegisterComponent},
    
    { path: 'me/:username', component: ProfileComponent, canActivate:[AuthGuard, UserGuard] },
    { path: 'me', redirectTo: 'me/:username', pathMatch: 'full' },

    
    { path: 'school/welcome', component: OrganizationComponent, canActivate:[AuthGuard] },
    { path: 'school/general', component: OrganizationComponent, canActivate:[AuthGuard] },
    { path: 'school/server-specific', component: OrganizationComponent, canActivate:[AuthGuard] },
    
    { path: 'gym/welcome', component: OrganizationComponent, canActivate:[AuthGuard] },
    { path: 'gym/general', component: OrganizationComponent, canActivate:[AuthGuard] },
    { path: 'gym/server-specific', component: OrganizationComponent, canActivate:[AuthGuard] },
    
    { path: 'camping/welcome', component: OrganizationComponent, canActivate:[AuthGuard] },
    { path: 'camping/general', component: OrganizationComponent, canActivate:[AuthGuard] },
    { path: 'camping/server-specific', component: OrganizationComponent, canActivate:[AuthGuard] },
    
    { path: 'school', redirectTo: 'school/welcome', pathMatch: 'full'},
    { path: 'gym', redirectTo: 'gym/welcome', pathMatch: 'full'},
    { path: 'camping', redirectTo: 'camping/welcome', pathMatch: 'full'},
    
    { path: ':server/:channel', component: OrganizationComponent, canActivate:[AuthGuard, ServerGuard] },
    // { path: ':server/', redirectTo: ':server/welcome', pathMatch: 'full' },

    // wild card route, anything link that isn't above links to NotFoundComponent
    { path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

    constructor(public configService: ConfigService, public http: HttpClient) { }

}
