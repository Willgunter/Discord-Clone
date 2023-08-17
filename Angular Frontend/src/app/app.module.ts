import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { MainComponent } from './components/data-columns/main-column/main.component';
import { FormsModule } from '@angular/forms';
import { ServerColumnComponent } from './components/data-columns/server-column/server-column.component';
import { ChannelColumnComponent } from './components/data-columns/channel-column/channel-column.component';
import { UserColumnComponent } from './components/data-columns/user-column/user-column.component';
import { ContentBoxComponent } from './components/content-box/content-box.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MessageBoxComponent,
    MainComponent,
    ServerColumnComponent,
    ChannelColumnComponent,
    UserColumnComponent,
    ContentBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
