import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { HomeContentComponent } from './home/home-content/home-content.component';
import { HomeSideBarComponent } from './home/home-side-bar/home-side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeContentComponent,
    HomeSideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
