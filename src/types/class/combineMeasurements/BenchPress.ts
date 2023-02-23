import Measurement from "../Measurement";

export default class BenchPress extends Measurement {
  constructor(value: number) {
    super("Bench Press", "Reps", value);
  }
}
