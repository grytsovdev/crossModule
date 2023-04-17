import { Shape } from "./Shape";

export interface TwoDimensionalShape extends Shape {
    calculatePerimeter(): number;
  }