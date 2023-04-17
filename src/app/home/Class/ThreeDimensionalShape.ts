import { Shape } from "./Shape";

export interface ThreeDimensionalShape extends Shape {
    calculateVolume(): number;
  }