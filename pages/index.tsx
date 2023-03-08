import type { NextPage, GetServerSideProps } from "next";
import type { HomeScreenProps } from "@/screens/HomeScreen/HomeScreen.interface";

import { HomeScreen } from "@/screens/HomeScreen/HomeScreen";
import { HomeScreenService } from "@/screens/HomeScreen/HomeScreen.service";
import { withLayout } from "@/Layout/Layout";

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
	const [popularRecipes] = await Promise.all([HomeScreenService.getPopularRecipes()]);

	return {
		props: {
			popularRecipes
		}
	};
};
