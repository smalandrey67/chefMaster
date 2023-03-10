import Link from "next/link";

import { ArticleItem } from "./components/ArticleItem/ArticleItem";
import { Title, FancyLink } from "chefmaster-ui";

import { TbArrowNarrowRight } from "react-icons/tb";
import type { ArticlesProps } from "./Articles.interface";

import styles from "./Articles.module.scss";

export function Articles({ articles }: ArticlesProps): JSX.Element {
	return (
		<section className={styles.articles}>
			<div className={styles.articlesHeader}>
				<Title variant="big">Articles</Title>
				<FancyLink Link={Link} href="/articles" Icon={TbArrowNarrowRight} iconSize={20} iconColor="var(--dark-10)" />
			</div>

			<div className={styles.articlesWrapper}>
				{articles && articles.map((article) => <ArticleItem key={article._id} {...article} />)}
			</div>
		</section>
	);
}
