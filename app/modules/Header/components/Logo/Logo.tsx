import Link from "next/link";
import { ImSpoonKnife } from "react-icons/im";

import styles from "./Logo.module.scss";

export function Logo() {
	return (
		<div className={styles.headerLogo}>
			<ImSpoonKnife size="25" color="var(--neon-10)" />
			<Link href="/" className={styles.headerLogoLink}>
				chefMaster
			</Link>
		</div>
	);
}
