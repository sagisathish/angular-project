import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { DescriptionComponent } from './description/description.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import {HttpClientModule, HttpBackend, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {MultiTranslateHttpLoader} from "ngx-translate-multi-http-loader";

export function HttpLoaderFactory(http: HttpClient): any {
  return new MultiTranslateHttpLoader(http, [
      {prefix: "./assets/translate/core/", suffix: ".json"},
      {prefix: "./assets/translate/shared/" , suffix: ".json" },
  ]);
}



const appRoute: Routes =[
  //{path: '',component:HomeComponent},
  {path:'', redirectTo: 'Home',pathMatch:'full'},
  {path: 'Home',component:HomeComponent},
  {path: 'About',component:AboutComponent},
  {path: 'Courses',component:CoursesComponent},
  {path: 'Contact',component:ContactComponent},
  {path: 'Description',component:DescriptionComponent},
  {path: '**',component:ErrorComponent}



  
]



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    ContactComponent,
    DescriptionComponent,
    ErrorComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpBackend]
            }
        })
    
    
   
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


