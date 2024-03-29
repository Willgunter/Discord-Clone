import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationComponent } from './components/organization/organization.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/user-handling/login/login.component';
import { RegisterComponent } from './components/user-handling/register/register.component';
import { ProfileComponent } from './components/user-handling/profile/profile.component';

import { AuthGuard } from './guards/auth.guard';
import { UserGuard } from './guards/user.gaurd';

import { ConfigService } from 'src/services/config.service';
import { HttpClient } from '@angular/common/http';
import { ContentGuard } from './guards/content.guard';

const routes: Routes = [
    
    { path: 'login', component: LoginComponent},
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // default route
    
    { path: 'register', component: RegisterComponent},
    
    { path: 'me/:username', component: ProfileComponent, canActivate:[AuthGuard, UserGuard] },
    { path: 'me', redirectTo: 'me/:username', pathMatch: 'full' },

    { path: ':server/:channel', component: OrganizationComponent, canActivate:[AuthGuard, ContentGuard] },
    { path: ':server', redirectTo: ':server/welcome', pathMatch: 'full' },

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
