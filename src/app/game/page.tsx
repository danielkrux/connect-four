import Board from "@/components/Board";
import Logo from "@/components/Logo";
import Score from "@/components/Score";
import Status from "@/components/Status";

export default function Game() {
  return (
    <main className="flex min-h-screen flex-col p-4">
      <div className="flex items-center justify-between self-stretch mx-1 my-12">
        <button className="bg-darkpurple text-white rounded-full px-6 py-2 text-xs uppercase">
          Menu
        </button>
        <Logo className="absolute left-1/2 -translate-x-1/2" />
        <button className="bg-darkpurple text-white rounded-full px-6 py-2 text-xs uppercase">
          Restart
        </button>
      </div>
      <div className="flex justify-between gap-4 mx-4">
        <Score player="one" score={12} />
        <Score player="two" score={23} />
      </div>
      <Board className="mt-12" />
      <Status />
    </main>
  );
}
