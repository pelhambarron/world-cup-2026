export type Stage = "GS" | "R32" | "R16" | "QF" | "SF" | "F" | "W";

export type Team = {
  name: string;
  odds: number | null;
  expectedStage: Stage;
  actualStage: Stage | null;
};

export const teams: Team[] = [
  { name: "Spain", odds: 4.5, expectedStage: "F", actualStage: null },
  { name: "France", odds: 5, expectedStage: "F", actualStage: null },
  { name: "England", odds: 6, expectedStage: "SF", actualStage: null },
  { name: "Brazil", odds: 8, expectedStage: "SF", actualStage: null },
  { name: "Argentina", odds: 8, expectedStage: "QF", actualStage: null },
  { name: "Portugal", odds: 10, expectedStage: "QF", actualStage: null },
  { name: "Germany", odds: 14, expectedStage: "QF", actualStage: null },
  { name: "Netherlands", odds: 20, expectedStage: "QF", actualStage: null },

  { name: "Norway", odds: 25, expectedStage: "R16", actualStage: null },
  { name: "Belgium", odds: 33, expectedStage: "R16", actualStage: null },
  { name: "Colombia", odds: 33, expectedStage: "R16", actualStage: null },
  { name: "Japan", odds: 50, expectedStage: "R16", actualStage: null },
  { name: "Morocco", odds: 50, expectedStage: "R16", actualStage: null },
  { name: "USA", odds: 66, expectedStage: "R16", actualStage: null },
  { name: "Uruguay", odds: 66, expectedStage: "R16", actualStage: null },
  { name: "Switzerland", odds: 80, expectedStage: "R16", actualStage: null },

  { name: "Mexico", odds: 80, expectedStage: "R32", actualStage: null },
  { name: "Croatia", odds: 80, expectedStage: "R32", actualStage: null },
  { name: "Turkey", odds: 80, expectedStage: "R32", actualStage: null },
  { name: "Ecuador", odds: 100, expectedStage: "R32", actualStage: null },
  { name: "Senegal", odds: 125, expectedStage: "R32", actualStage: null },
  { name: "Sweden", odds: 125, expectedStage: "R32", actualStage: null },
  { name: "Canada", odds: 150, expectedStage: "R32", actualStage: null },
  { name: "Austria", odds: 150, expectedStage: "R32", actualStage: null },
  { name: "Paraguay", odds: 150, expectedStage: "R32", actualStage: null },
  { name: "Scotland", odds: 250, expectedStage: "R32", actualStage: null },
  { name: "Bosnia-Herzegovina", odds: 250, expectedStage: "R32", actualStage: null },
  { name: "Ivory Coast", odds: 300, expectedStage: "R32", actualStage: null },
  { name: "Egypt", odds: 300, expectedStage: "R32", actualStage: null },
  { name: "Czechia", odds: 300, expectedStage: "R32", actualStage: null },
  { name: "Ghana", odds: 400, expectedStage: "R32", actualStage: null },
  { name: "South Korea", odds: null, expectedStage: "R32", actualStage: null },

  { name: "South Africa", odds: null, expectedStage: "GS", actualStage: null },
  { name: "New Zealand", odds: null, expectedStage: "GS", actualStage: null },
  { name: "Tunisia", odds: null, expectedStage: "GS", actualStage: null },
  { name: "Uzbekistan", odds: null, expectedStage: "GS", actualStage: null },
  { name: "Iran", odds: null, expectedStage: "GS", actualStage: null },
  { name: "DR Congo", odds: null, expectedStage: "GS", actualStage: null },
  { name: "Australia", odds: null, expectedStage: "GS", actualStage: null },
  { name: "Curaçao", odds: null, expectedStage: "GS", actualStage: null },
  { name: "Saudi Arabia", odds: null, expectedStage: "GS", actualStage: null },
  { name: "Jordan", odds: null, expectedStage: "GS", actualStage: null },
  { name: "Haiti", odds: null, expectedStage: "GS", actualStage: null },
  { name: "Iraq", odds: null, expectedStage: "GS", actualStage: null },
  { name: "Qatar", odds: null, expectedStage: "GS", actualStage: null },
  { name: "Panama", odds: null, expectedStage: "GS", actualStage: null },
  { name: "Algeria", odds: null, expectedStage: "GS", actualStage: null },
  { name: "Cape Verde", odds: null, expectedStage: "GS", actualStage: null },
];