import Head from "next/head";

import type { MetaProps } from "@/interfaces/Meta";

export function Meta({ title, description }: MetaProps): JSX.Element {
	return (
		<Head>
			<title>{title}</title>
			<link rel="icon" href="/chefmaster.ico" />
			{description ? (
				<meta itemProp="description" name="description" content={description} />
			) : (
				<meta name="robots" content="noindex, nofollow" />
			)}
		</Head>
	);
}
