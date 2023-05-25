import { Hero } from "@/components/landing-page";

export default async function Home() {
	return (
		<main className="flex min-h-screen bg-secondary-dark w-full flex-col items-center justify-center">
			<Hero />
		</main>
	);
}
