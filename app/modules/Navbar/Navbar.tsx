import Link from "next/link";
import styles from "./Navbar.module.scss";

export function Navbar(): JSX.Element {
	return (
		<div className={styles.navbar}>
			<div className={styles.navbarWrapper}>
				<Link href="/test/1">test page 2</Link>
				<Link href="/test/1">test page 3</Link>
				<Link href="/test/1">test page 4</Link>
				<Link href="/test/1">test page 5</Link>
			</div>
		</div>
	);
}
