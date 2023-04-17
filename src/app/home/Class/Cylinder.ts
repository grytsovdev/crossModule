import { ThreeDimensionalShape } from "./ThreeDimensionalShape";

export class Cylinder implements ThreeDimensionalShape{
    constructor(private radius: number, private height: number) {}
    show(): string {
        return `Циліндр: Площа: ${this.calculateArea()}, Об'єм: ${this.calculateVolume()}`;
    }
    calculateVolume(): number {
        return Number((Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(2));
    }
    calculateArea(): number {
        const baseArea = Math.PI * Math.pow(this.radius, 2);
        const lateralArea = 2 * Math.PI * this.radius * this.height;
        return Number((2 * baseArea + lateralArea).toFixed(2));
    }
    
}