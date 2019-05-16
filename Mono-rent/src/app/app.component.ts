import { Component } from '@angular/core';
import { send } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mono-rent';
  utenti : Array<string> = [];





  send(user:HTMLInputElement) : boolean{
 this.utenti.push(user.value);
 return false;
}



}
