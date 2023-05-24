import { RecoilContext } from "@/components";
import "./globals.css";

export const metadata = {
	title: "Fan Club",
	description: "A public ideation platform for content creators.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<RecoilContext>{children}</RecoilContext>
			</body>
		</html>
	);
}
