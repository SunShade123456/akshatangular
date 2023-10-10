import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Akshat';
  x = 'Priyo';
  y = 'angular';

  pujo(){
    alert('DurgaPujo Coming!');
  }

  uname = new FormControl("");
  updateName()
  {
    this.uname.setValue("AKSHAT");
  }

  products=
  [
    {
      brand:'Sony',
      price:40000,
      type:'LCD'
    },
    {
      brand:'Samsung',
      price:45000,
      type:'OLED'
    },
    {
      brand:'LG',
      price:35000,
      type:'LCD'
    },
    {
      brand:'OnePlus',
      price:50000,
      type:'OLED'
    },
  ];

}
