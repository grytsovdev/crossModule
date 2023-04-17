import { ThreeDimensionalShape } from "./ThreeDimensionalShape";

export class Pyramid implements ThreeDimensionalShape{
    constructor(private base: number, private height: number, private slantHeight: number) {
        
      }
    show(): string {
        return `Піраміда, Площа: ${this.calculateArea()}, Об'єм: ${this.calculateArea()}`;
    }
   
    
    calculateVolume(): number {
        const baseArea = this.base * this.base;
        const volume = (1 / 3) * baseArea * this.height;
        const roundedVolume = Math.round(volume * 100) / 100;
        return roundedVolume;
    }
    calculateArea(): number {
        const baseArea = this.base * this.base;
        const triangleArea = (this.base * this.height) / 2;
        const surfaceArea = baseArea + 3 * triangleArea;
        const roundedSurfaceArea = Math.round(surfaceArea * 100) / 100;
            return roundedSurfaceArea;
    }
    
}