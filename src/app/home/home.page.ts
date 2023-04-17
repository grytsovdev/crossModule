import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Shape } from './Class/Shape';
import { Cube } from './Class/Cube';
import { Cylinder } from './Class/Cylinder';
import { Diamond } from './Class/Diamond';
import { Pyramid } from './Class/Pyramid';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule]
})
export class HomePage implements OnInit{
  shape: Shape[] = [];
  constructor() {}

  max:number = 0;

  getRandomInt(max:number){
    return Math.floor(Math.random()*Math.floor(max)+1)
  }

  ras(nn:any){
    this.shape = new Array();
    let n = parseInt(nn)

    for(let i = 0; i<n;i++){

      this.shape.push(new Cube(this.getRandomInt(5)));
      this.shape.push(new Cylinder(this.getRandomInt(5),this.getRandomInt(10)));
      this.shape.push(new Pyramid(this.getRandomInt(10),this.getRandomInt(5),this.getRandomInt(10)))
      this.shape.push(new Diamond(this.getRandomInt(5),this.getRandomInt(5)));


    }
    this.shape.forEach((element)=>{
      element.show();
      console.log(element.show());
    })
  }

  ngOnInit(){
  }
}
