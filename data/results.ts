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
  // Finalists still alive
  "Spain": { currentStage: "F", status: "alive" },
  "Argentina": { currentStage: "F", status: "alive" },

  // Eliminated in Semifinal
  "France": { currentStage: "SF", status: "eliminated" },
  "England": { currentStage: "SF", status: "eliminated" },

  // Eliminated in Quarterfinal
  "Morocco": { currentStage: "QF", status: "eliminated" },
  "Belgium": { currentStage: "QF", status: "eliminated" },
  "Norway": { currentStage: "QF", status: "eliminated" },
  "Switzerland": { currentStage: "QF", status: "eliminated" },

  // Eliminated in Round of 16
  "Canada": { currentStage: "R16", status: "eliminated" },
  "Paraguay": { currentStage: "R16", status: "eliminated" },
  "Brazil": { currentStage: "R16", status: "eliminated" },
  "Mexico": { currentStage: "R16", status: "eliminated" },
  "Portugal": { currentStage: "R16", status: "eliminated" },
  "USA": { currentStage: "R16", status: "eliminated" },
  "Egypt": { currentStage: "R16", status: "eliminated" },
  "Colombia": { currentStage: "R16", status: "eliminated" },

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
  "Australia": { currentStage: "R32", status: "eliminated" },
  "Cape Verde": { currentStage: "R32", status: "eliminated" },
  "Ghana": { currentStage: "R32", status: "eliminated" },

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