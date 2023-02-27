import { ArticleItem } from "./components/ArticleItem/ArticleItem";
import { Title, Button } from "chefmaster-ui";

import { TbArrowNarrowRight } from "react-icons/tb";

import styles from "./Articles.module.scss";

export function Articles(): JSX.Element {
	return (
		<section className={styles.articles}>
			<div className={styles.articlesHeader}>
				<Title variant="big">Articles</Title>
				<Button Icon={TbArrowNarrowRight} iconSize={20} />
			</div>

			<div className={styles.articlesWrapper}>
				{new Array(4).fill("article").map((_, index) => (
					<ArticleItem
						key={index}
						image="https://lh3.googleusercontent.com/cl58QbQAB5JTvIuW_RctJE-AGE1cVcvYDwa79wMEUkd_nFpM-0-6kak2t20RjnA9PtOdDdxBpBoCzLtF4NQ-o1hS6HdszXsXVphPpSMbwUSqtcI2BNDUM51HlUhbUIU7lQkbbr5lPQ=w2400"
						title="Black Friday deal: Free salmon steaks"
					/>
				))}
			</div>
		</section>
	);
}
