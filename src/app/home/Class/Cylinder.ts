import { ThreeDimensionalShape } from "./ThreeDimensionalShape";

export class Cylinder implements ThreeDimensionalShape{
    constructor(private radius: number, private height: number) {}
    show(): string {
        return `Циліндр, Площа: ${this.calculateArea()}, Об'єм: ${this.calculateVolume()}`;
    }
    calculateVolume(): number {
        return Math.PI * Math.pow(this.radius, 2) * this.height;
    }
    calculateArea(): number {
        const baseArea = Math.PI * Math.pow(this.radius, 2);
        const lateralArea = 2 * Math.PI * this.radius * this.height;
        return 2 * baseArea + lateralArea;    }
    
}