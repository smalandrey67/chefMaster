import { NavbarItem } from "./components/NavbarItem/NavbarItem";

import { navbarItems } from "./Navbar.constants";

import styles from "./Navbar.module.scss";

export function Navbar(): JSX.Element {
	return (
		<aside className={styles.menu}>
			<nav className={styles.menuWrapper}>
				<ul className={styles.list}>
					{navbarItems.map(({ id, ...properties }) => (
						<NavbarItem key={id} {...properties} />
					))}
				</ul>
			</nav>
		</aside>
	);
}
