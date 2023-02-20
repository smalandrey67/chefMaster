import { Meta } from "@/components/Meta/Meta";
import { Header } from "@/modules/Header/Header";

import type { LayoutProps } from "./Layout.interface";

export function Layout({ children, ...metaProps }: LayoutProps): JSX.Element {
	return (
		<>
			<Meta {...metaProps} />
			<div>
				<Header />
				<main>{children}</main>
			</div>
		</>
	);
}
