import type { PageContainerProps } from "./PageContainer.interface";

import styles from "./PageContainer.module.scss";

export function PageContainer({ children }: PageContainerProps): JSX.Element {
	return <div className={styles.container}>{children}</div>;
}
