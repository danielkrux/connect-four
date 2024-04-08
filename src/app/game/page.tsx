import Board from "@/components/Board";
import Score from "@/components/Score";
import Status from "@/components/Status";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import { PageProps } from "@/types";

export default async function Game({ searchParams }: PageProps) {
  const showMenu = searchParams.menu === "true";

  return (
    <main className="flex min-h-screen flex-col md:mx-4 md:px-12 md:py-6">
      <Header />
      <div className="items-center mx-4 gap-x-4 grid [grid-template-areas:'score-p1_score-p2''board_board'] lg:[grid-template-areas:'score-p1_board_score-p2'] lg:[grid-template-columns:1.5fr_5fr_1.5fr] lg:gap-x-12 [max-height:800px] justify-items-center">
        <Score className="[grid-area:score-p1]" player="one" />
        <Score className="[grid-area:score-p2]" player="two" />
        <Board className="[grid-area:board] mt-6 w-full" />
      </div>
      <Status />
      {showMenu && <Menu />}
    </main>
  );
}
