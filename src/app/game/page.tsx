import Board from "@/components/Board";
import Score from "@/components/Score";
import Status from "@/components/Status";
import Header from "@/components/Header";
import { calculateWin } from "@/actions";
import RestartButton from "@/components/RestartButton";
import Menu from "@/components/Menu";
import { PageProps } from "@/types";

export default async function Game({ searchParams }: PageProps) {
  const showMenu = searchParams.menu === "true";
  const playerWon = await calculateWin();

  return (
    <main className="flex min-h-screen flex-col p-4">
      <Header />
      <div className="flex justify-between gap-4 mx-4">
        <Score player="one" score={12} />
        <Score player="two" score={23} />
      </div>
      <Board className="mt-12" />
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
