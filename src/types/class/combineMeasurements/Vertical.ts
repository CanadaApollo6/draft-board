import Measurement from "../Measurement";

export default class Vertical extends Measurement {
  constructor(value: number) {
    super("Vertical Jump", "in", value);
  }
}
