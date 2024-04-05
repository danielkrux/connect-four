import Button from "@/components/Button";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-purple md:bg-darkpurple flex-col items-center justify-center p-4">
      <div className="flex flex-col justify-center items-center lg:w-[480px] px-8 py-12 md:bg-purple md:border-3 md:rounded-lg">
        <Logo className="mb-16" />

        <Button href="game" className="mb-6" variant="yellow">
          Player vs Player
        </Button>
        <Button variant="white">game rules</Button>
      </div>
    </main>
  );
}
