import Head from "next/head";

import type { MetaProps } from "@/interfaces/Meta.interface";

export function Meta({ pageTitle, pageDescription }: MetaProps): JSX.Element {
	return (
		<Head>
			<title>{pageTitle}</title>
			<link rel="icon" href="/chefmaster.ico" />
			{pageDescription ? (
				<meta itemProp="description" name="description" content={pageDescription} />
			) : (
				<meta name="robots" content="noindex, nofollow" />
			)}
		</Head>
	);
}
