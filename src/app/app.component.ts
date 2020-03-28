import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mockApp01';
  

  displaymessage (){
    console.log('this message has been displayed')
  }
  
 movies = ["inception","fight club"];



 pantea (tool,arz) {
let surface = tool*arz

return surface;

}

}