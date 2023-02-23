import FortyTime from "../class/combineMeasurements/FortyTime";
import Vertical from "../class/combineMeasurements/Vertical";
import ThreeCone from "../class/combineMeasurements/ThreeCone";
import BenchPress from "../class/combineMeasurements/BenchPress";
import BroadJump from "../class/combineMeasurements/BroadJump";
import TwentyYardShuttle from "../class/combineMeasurements/TwentyYardShuttle";

export interface ICombineInfo {
  fortyTime: FortyTime;
  vertical: Vertical;
  threeCone: ThreeCone;
  benchPress: BenchPress;
  broadJump: BroadJump;
  twentyYardShuttle: TwentyYardShuttle;
}
