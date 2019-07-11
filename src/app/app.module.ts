import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import {DemoRoutingModule} from './demo-routing.module';
import{CoursesComponent} from './courses/courses.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    ContactComponent,
    CoursesComponent
  ],
  
  imports: [
    BrowserModule,
    DemoRoutingModule
  ]
,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
