import Measurement from "../Measurement";

export default class TwentyYardShuttle extends Measurement {
  constructor(value: number) {
    super("Twenty Yard Shuttle", "s", value);
  }
}
