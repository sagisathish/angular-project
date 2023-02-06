import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  
  title  = 'book-store-with-routing'
  supportlanguages=['en','fr'];

  constructor(private translate: TranslateService) {
    this.translate.addLangs(this.supportlanguages)
    this.translate.setDefaultLang('en');
    // this.translate.use('en');
  }
  // async function chooseLang(Lang:String) {
    // this.translate.use(Lang)
    
  // }


}
 
  

  


  



    

   
   





