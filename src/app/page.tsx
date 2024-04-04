import Button from "@/components/Button";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-purple flex-col items-center justify-center p-4">
      <div className="flex flex-col self-stretch justify-center items-center">
        <Logo className="mb-16" />

        <Button href="game" className="mb-6" variant="yellow">
          Player vs Player
        </Button>
        <Button variant="white">game rules</Button>
      </div>
    </main>
  );
}
