import Board from "@/components/Board";
import Score from "@/components/Score";
import Status from "@/components/Status";
import Header from "@/components/Header";
import RestartButton from "@/components/RestartButton";
import Menu from "@/components/Menu";
import { calculateWin } from "@/actions";
import { PageProps } from "@/types";

export default async function Game({ searchParams }: PageProps) {
  const showMenu = searchParams.menu === "true";
  const playerWon = await calculateWin();

  return (
    <main className="flex min-h-screen flex-col p-4 md:px-12 md:py-6">
      <Header />
      <div className="grid [grid-template-areas:'score-p1_score-p2''board_board'] lg:[grid-template-areas:'score-p1_board_score-p2'] lg:[grid-template-columns:2fr_5fr_2fr] gap-x-4 lg:gap-x-12 items-center mx-4">
        <Score className="[grid-area:score-p1]" player="one" />
        <Score className="[grid-area:score-p2]" player="two" />
        <Board className="[grid-area:board] mt-12" />
      </div>
      {!playerWon && <Status />}
      {playerWon && (
        <div className="bg-white border-3 shadow-container rounded px-7 flex flex-col items-center py-3 mx-4 -mt-4">
          <span className="text-xs uppercase">player {playerWon}</span>
          <span className="text-l uppercase">wins</span>
          <RestartButton>Play again</RestartButton>
        </div>
      )}
      {showMenu && <Menu />}
    </main>
  );
}
