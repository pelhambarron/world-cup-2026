import { participants } from "../data/participants";
import { teams } from "../data/teams";
import { defaultTeamResult, results } from "../data/results";
import {
  calculateMaxTeamPoints,
  calculateTeamPoints,
  getTeamByName,
  stageLabels,
  statusLabels,
  TeamWithResult,
} from "../lib/scoring";

function getTeamsWithResults(): TeamWithResult[] {
  return teams.map((team) => {
    const result = results[team.name] ?? defaultTeamResult;

    return {
      ...team,
      ...result,
    };
  });
}

function getLeaderboard(teamsWithResults: TeamWithResult[]) {
  return participants
    .map((participant) => {
      const participantTeams = participant.teams.map((teamName) =>
        getTeamByName(teamsWithResults, teamName)
      );

      const currentPoints = participantTeams.reduce(
        (sum, team) => sum + calculateTeamPoints(team),
        0
      );

      const upsidePoints = participantTeams.reduce(
        (sum, team) => sum + calculateMaxTeamPoints(team),
        0
      );

      const teamsAlive = participantTeams.filter(
        (team) => team.status === "alive"
      ).length;

      return {
        name: participant.name,
        teams: participantTeams,
        currentPoints,
        upsidePoints,
        teamsAlive,
      };
    })
    .sort((a, b) => {
      if (b.currentPoints !== a.currentPoints) {
        return b.currentPoints - a.currentPoints;
      }

      return b.upsidePoints - a.upsidePoints;
    });
}

function getPointClass(points: number): string {
  if (points > 0) return "text-emerald-300";
  if (points < 0) return "text-rose-300";
  return "text-slate-100";
}

function getStatusClass(status: string): string {
  if (status === "champion") {
    return "bg-emerald-500/15 text-emerald-300 border-emerald-500/30";
  }

  if (status === "eliminated") {
    return "bg-rose-500/15 text-rose-300 border-rose-500/30";
  }

  return "bg-sky-500/15 text-sky-300 border-sky-500/30";
}

export default function Home() {
  const teamsWithResults = getTeamsWithResults();
  const leaderboard = getLeaderboard(teamsWithResults);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            2026 World Cup
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            World Cup 2026 - Gianni&apos;s Army
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-300">
            Follow the standings for your 12-person World Cup snake draft.
            Teams earn or lose points based on how far they advance relative to
            their expected tournament stage.
          </p>
        </div>

        <div className="mb-10 grid gap-4 md:grid-cols-4">
          <SummaryCard label="Players" value={participants.length} />
          <SummaryCard label="Drafted Teams" value={teamsWithResults.length} />
          <SummaryCard label="Current Leader" value={leaderboard[0].name} />
          <SummaryCard
            label="Leader Points"
            value={leaderboard[0].currentPoints}
          />
        </div>

        <section className="mb-12 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6">
          <h2 className="mb-3 text-2xl font-bold">How scoring works</h2>
          <p className="max-w-4xl text-slate-200">
            Each team has an expected tournament stage. A team earns{" "}
            <span className="font-bold text-emerald-300">+10 points</span> for
            every round it advances beyond expectation and loses{" "}
            <span className="font-bold text-rose-300">-10 points</span> for
            every round it falls short. A team that wins the World Cup receives
            an additional{" "}
            <span className="font-bold text-emerald-300">+30 champion bonus</span>.
          </p>
          <p className="mt-3 max-w-4xl text-sm text-slate-300">
            While a team is still alive, it can bank positive points for
            exceeding expectation, but it will not receive negative points until
            it is officially eliminated.
          </p>
        </section>

        <section className="mb-12 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">Leaderboard</h2>
              <p className="text-sm text-slate-400">
                Ranked by current points, then upside.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-800">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-slate-800 text-slate-300">
                <tr>
                  <th className="px-4 py-3">Rank</th>
                  <th className="px-4 py-3">Player</th>
                  <th className="px-4 py-3 text-right">Current Points</th>
                  <th className="px-4 py-3 text-right">Upside</th>
                  <th className="px-4 py-3 text-right">Teams Alive</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((player, index) => (
                  <tr
                    key={player.name}
                    className="border-t border-slate-800 odd:bg-slate-900 even:bg-slate-900/50"
                  >
                    <td className="px-4 py-3 font-semibold text-slate-300">
                      {index + 1}
                    </td>
                    <td className="px-4 py-3 font-bold">{player.name}</td>
                    <td
                      className={`px-4 py-3 text-right font-semibold ${getPointClass(
                        player.currentPoints
                      )}`}
                    >
                      {player.currentPoints}
                    </td>
                    <td className="px-4 py-3 text-right">
                      {player.upsidePoints}
                    </td>
                    <td className="px-4 py-3 text-right">
                      {player.teamsAlive}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-5 text-2xl font-bold">Player Draft Boards</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {leaderboard.map((player) => (
              <article
                key={player.name}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{player.name}</h3>
                    <p
                      className={`text-sm font-semibold ${getPointClass(
                        player.currentPoints
                      )}`}
                    >
                      {player.currentPoints} current points
                    </p>
                  </div>
                  <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-300">
                    Upside {player.upsidePoints}
                  </div>
                </div>

                <div className="space-y-3">
                  {player.teams.map((team) => {
                    const points = calculateTeamPoints(team);

                    return (
                      <div
                        key={team.name}
                        className="rounded-xl bg-slate-950/70 p-3"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="font-semibold">{team.name}</p>
                            <p className="text-xs text-slate-400">
                              Expected: {stageLabels[team.expectedStage]}
                            </p>
                            <p className="text-xs text-slate-400">
                              Current: {stageLabels[team.currentStage]}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className={`font-bold ${getPointClass(points)}`}>
                              {points}
                            </p>
                            <p className="text-xs text-slate-500">points</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl">
          <h2 className="mb-5 text-2xl font-bold">Team Detail</h2>

          <div className="overflow-hidden rounded-xl border border-slate-800">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-slate-800 text-slate-300">
                <tr>
                  <th className="px-4 py-3">Team</th>
                  <th className="px-4 py-3">Owner</th>
                  <th className="px-4 py-3">Expected Stage</th>
                  <th className="px-4 py-3">Current Stage</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Odds</th>
                  <th className="px-4 py-3 text-right">Current Points</th>
                  <th className="px-4 py-3 text-right">Team Max</th>
                </tr>
              </thead>
              <tbody>
                {teamsWithResults.map((team) => {
                  const owner = participants.find((participant) =>
                    participant.teams.includes(team.name)
                  );

                  const points = calculateTeamPoints(team);

                  return (
                    <tr
                      key={team.name}
                      className="border-t border-slate-800 odd:bg-slate-900 even:bg-slate-900/50"
                    >
                      <td className="px-4 py-3 font-semibold">{team.name}</td>
                      <td className="px-4 py-3">{owner?.name ?? "—"}</td>
                      <td className="px-4 py-3">
                        {stageLabels[team.expectedStage]}
                      </td>
                      <td className="px-4 py-3">
                        {stageLabels[team.currentStage]}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`rounded-full border px-2 py-1 text-xs font-semibold ${getStatusClass(
                            team.status
                          )}`}
                        >
                          {statusLabels[team.status]}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        {team.odds ? `${team.odds}/1` : "—"}
                      </td>
                      <td
                        className={`px-4 py-3 text-right font-semibold ${getPointClass(
                          points
                        )}`}
                      >
                        {points}
                      </td>
                      <td className="px-4 py-3 text-right">
                        {calculateMaxTeamPoints(team)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </main>
  );
}

function SummaryCard({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-2 text-3xl font-bold">{value}</p>
    </div>
  );
}