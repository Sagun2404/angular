import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FUCK OFF';
  num1=0;
  num2=0;
  a=0;
  b=0;
  num3=0;
  
  
  count=0;
  list=[4,6,898,33,97,24];
  // list=[1,2,3,4,5,687,87,10000];
  names=["Sagun","no-one"];
  increment=() => {
    this.count++

  }
  decrement=()=>{
    if(this.count>0){
      this.count--
    }
     
       
        
  }
  sum=()=>{
   this.a=Number(this.num1);
   this.b=Number(this.num2);
   this.num3=this.a+this.b;
  }
  
}
