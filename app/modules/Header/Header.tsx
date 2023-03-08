import { PageContainer } from "@/containers/PageContainer/PageContainer";

import { Profile } from "./components/Profile/Profile";
import { Logo } from "./components/Logo/Logo";

import styles from "./Header.module.scss";

export function Header(): JSX.Element {
	return (
		<header className={styles.header}>
			<PageContainer>
				<div className={styles.headerWrapper}>
					<Logo />
					<Profile />
				</div>
			</PageContainer>
		</header>
	);
}
