import Measurement from "../Measurement";

export default class ThreeCone extends Measurement {
  constructor(value: number) {
    super("Three Cone", "s", value);
  }
}
