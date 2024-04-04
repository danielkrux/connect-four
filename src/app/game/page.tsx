import Board from "@/components/Board";
import Score from "@/components/Score";
import Status from "@/components/Status";
import Header from "@/components/Header";

export default function Game() {
  return (
    <main className="flex min-h-screen flex-col p-4">
      <Header />
      <div className="flex justify-between gap-4 mx-4">
        <Score player="one" score={12} />
        <Score player="two" score={23} />
      </div>
      <Board className="mt-12" />
      <Status />
    </main>
  );
}
