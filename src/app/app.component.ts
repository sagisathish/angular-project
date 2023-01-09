import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  
  title = 'book-store-with-routing'

  supportLanguage =['en','fr','hi']

  constructor(private translateService:TranslateService){
    this.translateService.addLangs(this.supportLanguage);
    this.translateService.setDefaultLang('en');

    const browserlang =this.translateService.getBrowserLang();
    //this.translateService.use(browserlang.);

  }

  


  
  }


    

   
   





