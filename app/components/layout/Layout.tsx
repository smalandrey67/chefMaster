import { Meta } from "@/components/Meta/Meta";
import { Header } from "@/modules/Header/Header";

import { LayoutProps } from "./Layout.interface";

export function Layout({ children, title, description }: LayoutProps): JSX.Element {
	return (
		<>
			<Meta title={title} description={description} />
			<div>
				<Header />
				<main>{children}</main>
			</div>
		</>
	);
}
