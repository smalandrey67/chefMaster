import { Poppins } from "@next/font/google";

import type { AppProps } from "next/app";

import "chefmaster-ui/dist/styles/main.css";
import "@/styles/globals.scss";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "600", "800"]
});

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<style jsx global>
				{`
					:root {
						--poppins-font: ${poppins.style.fontFamily};
					}
				`}
			</style>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
