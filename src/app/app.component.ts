import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Empty-Project';

  list:string [] = []
  testo1:string = "Button1";
  testo2:string = "Button2";
  testo3:string = "Button3";
  testo4:string = "Button4";
  ultimo:string = ""
  onClick1(){
    this.list.push(this.testo1)
  }

  onClick2(){
    this.list.push(this.testo2)
  }

  onClick3(){
    this.list.push(this.testo3)
  }

  onClick4(){
    this.list.push(this.testo4)
  }











}
