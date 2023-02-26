import Image from "next/image";

import { Title } from "chefmaster-ui";

import { ArticlesItem } from "../../Articles.interface";
import styles from "./ArticleItem.module.scss";

export function ArticleItem({ image, title }: ArticlesItem): JSX.Element {
	return (
		<article className={styles.article}>
			<Image src={image} className={styles.articleImage} width={100} height={100} alt={title} />
			<div className={styles.articleTitle}>
				<Title variant="small">Black Friday deal: Free salmon steaks</Title>
			</div>
		</article>
	);
}
