import Head from "next/head";

import type { MetaProps } from "@/interfaces/Meta";

export function Meta({ title, description }: MetaProps): JSX.Element {
	return (
		<Head>
			<title>{title}</title>
			<link rel="icon" href="/favicon.png" type="image/x-icon" />
			{description ? (
				<meta itemProp="description" name="description" content={description} />
			) : (
				<meta name="robots" content="noindex, nofollow" />
			)}
		</Head>
	);
}
