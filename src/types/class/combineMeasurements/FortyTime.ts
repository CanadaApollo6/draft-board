import Measurement from "../Measurement";

export default class FortyTime extends Measurement {
  constructor(value: number) {
    super("40 Yard Dash", "s", value);
  }
}
