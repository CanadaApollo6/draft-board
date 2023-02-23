import { IMeasurement } from "../index";

export default class Measurement implements IMeasurement {
  title: string;
  unit: string;
  value: number;

  constructor(title: string, unit: string, value: number) {
    this.title = title;
    this.unit = unit;
    this.value = value;
  }
}
