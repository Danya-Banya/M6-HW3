import styles from "./HomePage.module.scss";
import { usePosts } from "./HomePage.api";
import { NavLink } from "react-router-dom";

const renderPosts = ({ title, body, id }) => {
  const toPost = `/posts/${id}`;

  return (
    <div key={id}>
      <NavLink className={styles.postTitle} to={toPost}>
        {title}
      </NavLink>
      <p className={styles.postDescription}>{body}</p>
    </div>
  );
};

export const HomePage = () => {
  const { data: posts, isPending, isError, error } = usePosts();
  if (isPending) return <h2 className={styles.homePageLoading}>Загрузка...</h2>;
  if (isError)
    return <h2 className={styles.homePageLoading}>Ошибка: {error.message}</h2>;
  return (
    <main className={styles.homePage}>
      <div className="container">
        <h1 className={styles.homePageTitle}>POSTS</h1>
        <div className={styles.wrapper}>{posts?.map(renderPosts)}</div>
      </div>
    </main>
  );
};
