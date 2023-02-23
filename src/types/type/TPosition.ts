import { TOffensivePosition } from "./TOffensivePosition";
import { TDefensivePosition } from "./TDefensivePosition";
import { TSpecialTeamsPosition } from "./TSpecialTeamsPosition";

export type TPosition =
  | TOffensivePosition
  | TDefensivePosition
  | TSpecialTeamsPosition;
