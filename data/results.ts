import { Stage } from "./teams";

export type ResultStatus = "alive" | "eliminated" | "champion";

export type TeamResult = {
  currentStage: Stage;
  status: ResultStatus;
};

export const defaultTeamResult: TeamResult = {
  currentStage: "GS",
  status: "alive",
};

export const results: Partial<Record<string, TeamResult>> = {};