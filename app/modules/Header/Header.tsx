import Link from "next/link";

import { PageContainer } from "@/containers/PageContainer/PageContainer";
import { Profile } from "./components/Profile/Profile";

import { ImSpoonKnife } from "react-icons/im";

import styles from "./Header.module.scss";

export function Header(): JSX.Element {
	return (
		<header className={styles.header}>
			<PageContainer>
				<div className={styles.headerBody}>
					<div className={styles.headerLogo}>
						<ImSpoonKnife size="25" color="var(--neon-10)" />
						<Link href="/" className={styles.headerLogoLink}>
							chefMaster
						</Link>
					</div>
					<Profile />
				</div>
			</PageContainer>
		</header>
	);
}
