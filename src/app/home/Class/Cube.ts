import { ThreeDimensionalShape } from "./ThreeDimensionalShape";

export class Cube implements ThreeDimensionalShape{
    constructor(private side: number) {
       
      }
    show(): string {
        return `Куб, Площа: ${this.calculateArea()}, Об'єм: ${this.calculateVolume()}`;
    }
    calculateVolume(): number {
        return 6 * this.side * this.side;
    }
    calculateArea(): number {
        return this.side * this.side * this.side;
    }
}