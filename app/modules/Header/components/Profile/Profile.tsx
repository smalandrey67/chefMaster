import styles from "./Profile.module.scss";

export function Profile(): JSX.Element {
	return (
		<div className={styles.profile}>
			<img
				src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
				className={styles.profileImage}
				alt="user picture"
			/>
		</div>
	);
}
