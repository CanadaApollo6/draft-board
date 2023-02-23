import React, { useState } from "react";
import { PlayerCardInfo } from "../types";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Unstable_Grid2";

interface IPlayerCard {
  playerCardInfo: PlayerCardInfo;
}

const PlayerCard: React.FC<IPlayerCard> = ({ playerCardInfo }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const handleChange = () => {
    setExpanded(!expanded);
  };
  return (
    <div style={{ marginBottom: "10px" }}>
      <Accordion expanded={expanded} onChange={handleChange}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography width={"25%"} align={"left"} fontWeight={"bold"}>
            {playerCardInfo.name}
          </Typography>
          <Typography width={"25%"}>{playerCardInfo.school}</Typography>
          <Typography
            width={"25%"}
          >{`${playerCardInfo.position}${playerCardInfo.positionRank}`}</Typography>
          <Typography
            width={"25%"}
          >{`Big Board: #${playerCardInfo.bigBoardRank}`}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container marginBottom={"10px"} justifyContent={"left"}>
            <Typography
              marginRight={"20px"}
            >{`Age: ${playerCardInfo.age}`}</Typography>
            <Typography
              marginRight={"20px"}
            >{`Height: ${playerCardInfo.height}`}</Typography>
            <Typography
              marginRight={"20px"}
            >{`Weight: ${playerCardInfo.weight} lbs`}</Typography>
            <Typography>{`Wingspan: ${playerCardInfo.wingspan} in.`}</Typography>
          </Grid>
          <Typography textAlign={"start"}>
            {playerCardInfo.description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default PlayerCard;
