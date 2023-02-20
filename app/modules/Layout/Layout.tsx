import { Meta } from "@/common/Meta/Meta";
import { PageContainer } from "@/containers/PageContainer/PageContainer";

import { Header } from "@/modules/Header";

import type { LayoutProps } from "./Layout.interface";
import styles from "./Layout.module.scss";

export function Layout({ children, ...metaProps }: LayoutProps): JSX.Element {
	return (
		<>
			<Meta {...metaProps} />
			<div className={styles.wrapper}>
				<Header />
				<main className={styles.main}>
					<PageContainer>{children}</PageContainer>
				</main>
			</div>
		</>
	);
}
