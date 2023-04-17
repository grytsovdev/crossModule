import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Shape } from './Class/Shape';
import { Cube } from './Class/Cube';
import { Cylinder } from './Class/Cylinder';
import { Diamond } from './Class/Diamond';
import { Pyramid } from './Class/Pyramid';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage implements OnInit{
  Shape: Shape[] = [];
  constructor() {}

  max:number = 0;

  getRandomInt(max:number){
    return Math.floor(Math.random()*Math.floor(max)+1)
  }

  ras(nn:any){
    this.Shape = new Array();
    let n = parseInt(nn)

    for(let i = 0; i<n;i++){

      this.Shape.push(new Cube(this.getRandomInt(5)));
      this.Shape.push(new Cylinder(this.getRandomInt(5),this.getRandomInt(10)));
      this.Shape.push(new Pyramid(this.getRandomInt(10),this.getRandomInt(5),this.getRandomInt(10)))
      this.Shape.push(new Diamond(this.getRandomInt(5),this.getRandomInt(5)));


    }
    this.Shape.forEach((element)=>{
      element.show();
      console.log(element.show());
    })
  }

  ngOnInit(){
  }
}
