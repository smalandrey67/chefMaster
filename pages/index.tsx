import { HomeScreen } from "@/screens/HomeScreen/HomeScreen";
import { HomeScreenService } from "@/screens/HomeScreen/HomeScreen.service";
import { withLayout } from "@/Layout/Layout";

import type { GetServerSideProps, NextPage } from "next";
import type { HomeScreenProps } from "@/screens/HomeScreen/HomeScreen.interface";

interface HomeProps extends HomeScreenProps, Record<string, unknown> {}

const Home: NextPage<HomeProps> = (props): JSX.Element => {
	return <HomeScreen {...props} />;
};

export default withLayout({
	Component: Home,
	pageTitle: "chefMaster",
	pageDescription: "Discover a world of mouth-watering recipes on our site."
});

export const getServerSideProps: GetServerSideProps<HomeScreenProps> = async () => {
	try {
		const [popularRecipes, articles] = await Promise.all([HomeScreenService.getPopularRecipes(), HomeScreenService.getArticles()]);

		return {
			props: { popularRecipes, articles }
		};
	} catch (error: unknown) {
		return {
			props: { error: (error as Error).message }
		};
	}
};
