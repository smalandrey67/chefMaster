import Link from "next/link";

import { FancyLink } from "chefmaster-ui";

import type { NavbarItemProps } from "./NavbarItem.interface";
import styles from "./NavbarItem.module.scss";

export function NavbarItem({ path, label, Icon }: NavbarItemProps): JSX.Element {
	return (
		<li className={styles.listItem}>
			<FancyLink className={styles.listLink} Link={Link} href={path}>
				{label}
			</FancyLink>
			<FancyLink Link={Link} href={path} Icon={Icon} iconSize={20} iconColor="#000000" title={label} />
		</li>
	);
}
