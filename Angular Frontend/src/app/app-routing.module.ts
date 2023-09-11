import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationComponent } from './components/organization/organization.component';
import { MainComponent } from './components/data-columns/main-column/main.component';

const routes: Routes = [
    // Note: may need to add a component that contains all of the components
    // in order to get all the important components to display in each
    // route (I hope that makes sense)
    { // skewl redirects --> skewl/general
        path: 'skewl', 
        component: OrganizationComponent,
        children: [
            {
                path: 'welcome',
                component: OrganizationComponent,
            },
            {
                path: 'general',
                // component: MainComponent,
                component: OrganizationComponent,
            },
            {
                path: 'server-specific',
                component: OrganizationComponent,
            },
        ],

    },
    
    // { path: 'skewl/general', component: OrganizationComponent},
    // { path: 'skewl/server-specific', component: OrganizationComponent},


    { path: '💪💪/welcome', component: OrganizationComponent},
    { path: '💪💪/general', component: OrganizationComponent},
    { path: '💪💪/server-specific', component: OrganizationComponent},


    { path: 'boys_only/welcome', component: OrganizationComponent},
    { path: 'boys_only/general', component: OrganizationComponent},
    { path: 'boys_only/server-specific', component: OrganizationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
