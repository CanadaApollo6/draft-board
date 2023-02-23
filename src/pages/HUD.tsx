import React from "react";
import PlayerCard from "../components/PlayerCard";
import players from "../data/testData";
import Grid from "@mui/material/Unstable_Grid2";
import { sortByBigBoardRank } from "../services/filterService";

const HUD: React.FC = () => {
  return (
    <Grid container>
      <Grid xs={0} sm={4}></Grid>
      <Grid container margin={"3rem"} xs={12} sm={4}>
        {sortByBigBoardRank(players).map((player) => (
          <PlayerCard playerCardInfo={player} />
        ))}
      </Grid>
      <Grid xs={0} sm={4}></Grid>
    </Grid>
  );
};

export default HUD;
