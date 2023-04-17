import { TwoDimensionalShape } from "./TwoDimensionalShape";

export class Diamond implements TwoDimensionalShape{
    constructor(private diagonal1: number, private diagonal2: number) {}
    show(): string {
        return `Ромб, Площа: ${this.calculateArea()}, Периметр: ${this.calculatePerimeter()}, Радіус вписаного кола: ${this.calculateInscribedRadius()}, Радіус описаного кола: ${this.calculateCircumscribedRadius()}`;
    }
    calculatePerimeter(): number {
       return 2* Math.sqrt(this.diagonal1*this.diagonal1+this.diagonal2*this.diagonal2)
    }
    calculateArea(): number {
        return (this.diagonal1*this.diagonal2)/2
    }

    calculateInscribedRadius(){
        const side = Math.sqrt(Math.pow(this.diagonal1 / 2, 2) + Math.pow(this.diagonal2 / 2, 2));
  const radius = side / 2;
  return radius;
    }
    calculateCircumscribedRadius(){
        const diagonal = Math.sqrt(Math.pow(this.diagonal1, 2) + Math.pow(this.diagonal2, 2));
        const radius = diagonal / 2;
        return radius;
    }
    
}