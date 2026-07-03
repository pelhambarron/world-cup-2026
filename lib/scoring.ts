import { Stage, Team } from "../data/teams";
import { TeamResult } from "../data/results";

export type TeamWithResult = Team & TeamResult;

export const stageLabels: Record<Stage, string> = {
  GS: "Group Stage",
  R32: "Round of 32",
  R16: "Round of 16",
  QF: "Quarterfinal",
  SF: "Semifinal",
  F: "Final",
  W: "Champion",
};

export const statusLabels = {
  alive: "Still Alive",
  eliminated: "Eliminated",
  champion: "Champion",
};

const stageOrder: Record<Stage, number> = {
  GS: 0,
  R32: 1,
  R16: 2,
  QF: 3,
  SF: 4,
  F: 5,
  W: 5,
};

function calculateBasePoints(expectedStage: Stage, currentStage: Stage): number {
  return (stageOrder[currentStage] - stageOrder[expectedStage]) * 10;
}

export function calculateTeamPoints(team: TeamWithResult): number {
  const basePoints = calculateBasePoints(team.expectedStage, team.currentStage);

  if (team.status === "champion") {
    return basePoints + 30;
  }

  if (team.status === "eliminated") {
    return basePoints;
  }

  // While a team is still alive, it can bank positive points
  // for exceeding expectation, but it should not be penalized
  // before it is officially eliminated.
  return Math.max(0, basePoints);
}

export function calculateOriginalMaxTeamPoints(team: Team): number {
  return (stageOrder.W - stageOrder[team.expectedStage]) * 10 + 30;
}

export function calculateTeamCeilingPoints(team: TeamWithResult): number {
  // If the team is eliminated or champion, its score is locked.
  if (team.status === "eliminated" || team.status === "champion") {
    return calculateTeamPoints(team);
  }

  // If the team is still alive, its ceiling is still winning the tournament.
  return calculateOriginalMaxTeamPoints(team);
}

export function getTeamByName<T extends { name: string }>(
  teams: T[],
  name: string
): T {
  const team = teams.find((team) => team.name === name);

  if (!team) {
    throw new Error(`Team not found: ${name}`);
  }

  return team;
}