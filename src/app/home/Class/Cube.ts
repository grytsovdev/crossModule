import { ThreeDimensionalShape } from "./ThreeDimensionalShape";

export class Cube implements ThreeDimensionalShape{
    constructor(private side: number) {
       
      }
    show(): string {
        return `Куб: Площа: ${this.calculateArea()}, Об'єм: ${this.calculateVolume()}`;
    }
    calculateVolume(): number {
        return Number((6 * this.side * this.side).toFixed(2));
    }
    calculateArea(): number {
        return Number((this.side * this.side * this.side).toFixed(2));
    }
}