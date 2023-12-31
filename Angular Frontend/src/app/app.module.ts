import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageBoxComponent } from './components/data-columns/main/message-box/message-box.component';
import { MainComponent } from './components/data-columns/main/main-column/main.component';
import { FormsModule } from '@angular/forms';
import { ServerColumnComponent } from './components/data-columns/server-column/server-column.component';
import { ChannelColumnComponent } from './components/data-columns/channel-column/channel-column.component';
import { UserColumnComponent } from './components/data-columns/user-column/user-column.component';
import { ContentBoxComponent } from './components/data-columns/main/content-box/content-box.component';
import { OrganizationComponent } from './components/organization/organization.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/user-handling/login/login.component';
import { RegisterComponent } from './components/user-handling/register/register.component';


import { ValidateService} from 'src/services/validate.service';
import { AuthService } from 'src/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    MessageBoxComponent,
    MainComponent,
    ServerColumnComponent,
    ChannelColumnComponent,
    UserColumnComponent,
    ContentBoxComponent,
    OrganizationComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ValidateService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
