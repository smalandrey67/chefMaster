import type { NextPage } from "next";

import { HomeScreen } from "@/screens/HomeScreen/HomeScreen";
import { withLayout } from "@/Layout/Layout";

const Home: NextPage = (): JSX.Element => {
	return <HomeScreen />;
};

export default withLayout({
	Component: Home,
	pageTitle: "chefMaster",
	pageDescription: "Discover a world of mouth-watering recipes on our site."
});
