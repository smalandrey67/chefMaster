import { ArticleItem } from "./components/ArticleItem/ArticleItem";
import { Title } from "chefmaster-ui";

import styles from "./Articles.module.scss";

export function Articles(): JSX.Element {
	return (
		<section className={styles.articles}>
			<Title className={styles.articlesTitle} variant="big">
				Articles
			</Title>

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
