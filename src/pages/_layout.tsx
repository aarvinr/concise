import { ReactNode } from "react";

type Props = {
	children: ReactNode;
};
export default function ({ children }: Props) {
	return (
		<html lang="en-US" dir="ltr">
			<meta charSet="utf-8" />

			<meta content="no-referrer" name="referrer" />
			<meta content="none" name="robots" />

			<meta content="dark light" name="theme-color" />
			<meta content="initial-scale=1, width=device-width" name="viewport" />

			<meta content="Concise" name="application-name" />
			<meta content="Concise" name="application-title" />
			<meta content="Aarvin Roshin" name="author" />
			<meta content="Encrypted notes and not much else." name="description" />

			<link href="/favicon.webp" rel="icon" type="image/webp" />
			<body>{children}</body>
		</html>
	);
}
