import { Stage, Team } from "../data/teams";

export const stageLabels: Record<Stage, string> = {
  GS: "Group Stage",
  R32: "Round of 32",
  R16: "Round of 16",
  QF: "Quarterfinal",
  SF: "Semifinal",
  F: "Final",
  W: "Champion",
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

export function calculateTeamPoints(team: Team): number {
  if (!team.actualStage) return 0;

  const basePoints =
    (stageOrder[team.actualStage] - stageOrder[team.expectedStage]) * 10;

  const championBonus = team.actualStage === "W" ? 30 : 0;

  return basePoints + championBonus;
}

export function calculateMaxTeamPoints(team: Team): number {
  return (stageOrder.W - stageOrder[team.expectedStage]) * 10 + 30;
}

export function calculateProjectedTeamPoints(team: Team): number {
  if (team.actualStage) return calculateTeamPoints(team);

  // For now, assume every unresolved team finishes exactly at expectation.
  return 0;
}

export function getTeamByName(teams: Team[], name: string): Team {
  const team = teams.find((team) => team.name === name);

  if (!team) {
    throw new Error(`Team not found: ${name}`);
  }

  return team;
}