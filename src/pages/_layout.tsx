import { ReactNode } from "react";

type Props = {
	children: ReactNode;
};
export default function ({ children }: Props) {
	return (
		<html lang="en-US" dir="ltr">
			<body>{children}</body>
		</html>
	);
}
