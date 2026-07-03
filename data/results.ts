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

export const results: Partial<Record<string, TeamResult>> = {
  // Round of 16 teams confirmed so far
  "Canada": { currentStage: "R16", status: "alive" },
  "Brazil": { currentStage: "R16", status: "alive" },
  "Paraguay": { currentStage: "R16", status: "alive" },
  "Morocco": { currentStage: "R16", status: "alive" },
  "Norway": { currentStage: "R16", status: "alive" },
  "France": { currentStage: "R16", status: "alive" },
  "Mexico": { currentStage: "R16", status: "alive" },
  "England": { currentStage: "R16", status: "alive" },
  "Belgium": { currentStage: "R16", status: "alive" },
  "USA": { currentStage: "R16", status: "alive" },
  "Spain": { currentStage: "R16", status: "alive" },
  "Portugal": { currentStage: "R16", status: "alive" },
  "Switzerland": { currentStage: "R16", status: "alive" },

  // Round of 32 teams still alive / scheduled
  "Australia": { currentStage: "R32", status: "alive" },
  "Egypt": { currentStage: "R32", status: "alive" },
  "Argentina": { currentStage: "R32", status: "alive" },
  "Cape Verde": { currentStage: "R32", status: "alive" },
  "Colombia": { currentStage: "R32", status: "alive" },
  "Ghana": { currentStage: "R32", status: "alive" },

  // Eliminated in Round of 32
  "South Africa": { currentStage: "R32", status: "eliminated" },
  "Japan": { currentStage: "R32", status: "eliminated" },
  "Germany": { currentStage: "R32", status: "eliminated" },
  "Netherlands": { currentStage: "R32", status: "eliminated" },
  "Ivory Coast": { currentStage: "R32", status: "eliminated" },
  "Sweden": { currentStage: "R32", status: "eliminated" },
  "Ecuador": { currentStage: "R32", status: "eliminated" },
  "DR Congo": { currentStage: "R32", status: "eliminated" },
  "Senegal": { currentStage: "R32", status: "eliminated" },
  "Bosnia-Herzegovina": { currentStage: "R32", status: "eliminated" },
  "Austria": { currentStage: "R32", status: "eliminated" },
  "Croatia": { currentStage: "R32", status: "eliminated" },
  "Algeria": { currentStage: "R32", status: "eliminated" },

  // Eliminated in Group Stage
  "South Korea": { currentStage: "GS", status: "eliminated" },
  "Czechia": { currentStage: "GS", status: "eliminated" },
  "Qatar": { currentStage: "GS", status: "eliminated" },
  "Turkey": { currentStage: "GS", status: "eliminated" },
  "Curaçao": { currentStage: "GS", status: "eliminated" },
  "Haiti": { currentStage: "GS", status: "eliminated" },
  "Tunisia": { currentStage: "GS", status: "eliminated" },
  "Iran": { currentStage: "GS", status: "eliminated" },
  "New Zealand": { currentStage: "GS", status: "eliminated" },
  "Saudi Arabia": { currentStage: "GS", status: "eliminated" },
  "Uruguay": { currentStage: "GS", status: "eliminated" },
  "Iraq": { currentStage: "GS", status: "eliminated" },
  "Jordan": { currentStage: "GS", status: "eliminated" },
  "Uzbekistan": { currentStage: "GS", status: "eliminated" },
  "Panama": { currentStage: "GS", status: "eliminated" },
  "Scotland": { currentStage: "GS", status: "eliminated" },
};