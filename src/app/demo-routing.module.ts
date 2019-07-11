import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';

import{CoursesComponent} from './courses/courses.component';

const appRoute : Routes=[

  {path:'home',component:HomeComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'contact',component:ContactComponent},
  {path:'courses',component:CoursesComponent},
  {path:'',component:HomeComponent},
  {path:'**',component:GalleryComponent}
  ]
  

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
