import Link from "next/link";

import { Button } from "chefmaster-ui";
import { PageContainer } from "@/containers/PageContainer/PageContainer";

import { ImSpoonKnife } from "react-icons/im";
import { CgMenuHotdog } from "react-icons/cg";

import styles from "./Header.module.scss";

export function Header(): JSX.Element {
	return (
		<header>
			<PageContainer>
				<div className={styles.headerBody}>
					<div className={styles.headerLogo}>
						<ImSpoonKnife size="25" color="var(--neon-10)" />
						<Link href="/" className={styles.headerLogoLink}>
							chefMaster
						</Link>
					</div>
					<Button Icon={CgMenuHotdog} iconSize="25" />
				</div>
			</PageContainer>
		</header>
	);
}
