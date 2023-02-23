import * as fs from "fs";
import * as path from "path";
import { parse } from "csv-parse";
import { PlayerCardInfo, Position } from "../types";

export const getPlayerCardInfo = (filePath: string): PlayerCardInfo[] => {
  const csvFilePath = path.resolve(__dirname, filePath);
  const headers: string[] = [
    "name",
    "school",
    "age",
    "height",
    "weight",
    "wingspan",
    "position",
    "positionRank",
    "bigBoardRank",
    "description",
  ];
  const fileContent = fs.readFileSync(csvFilePath, { encoding: "utf8" });
  let data: PlayerCardInfo[] = [];

  parse(
    fileContent,
    {
      delimiter: ",",
      columns: headers,
      fromLine: 2,
      cast: (columnValue, context) => {
        switch (context.column) {
          case "age":
          case "weight":
          case "wingspan":
          case "positionRank":
          case "bigBoardRank":
            return parseInt(columnValue, 10);
          case "position":
            return columnValue as Position;
        }
      },
    },
    (error, result: PlayerCardInfo[]) => {
      if (error) {
        console.log(error);
      }
      data = result;
    }
  );
  return data;
};
