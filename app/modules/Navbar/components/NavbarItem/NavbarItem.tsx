import Link from "next/link";

import { Button } from "chefmaster-ui";

import type { NavbarItemProps } from "./NavbarItem.interface";
import styles from "./NavbarItem.module.scss";

export function NavbarItem({ path, label, Icon }: NavbarItemProps): JSX.Element {
	return (
		<li className={styles.listItem}>
			<Link href={path} className={styles.listLink}>
				{label}
			</Link>
			<Button Icon={Icon} iconSize="25" name={label} aria-label={label} />
		</li>
	);
}
