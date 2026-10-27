import { useParams } from "react-router-dom";
import s from "./DetailsPage.module.scss";
import { usePostData } from "./DetailsPage.api";
import { NavLink } from "react-router-dom";

export const DetailsPage = () => {
  const { id } = useParams();
  const { data: post, isPending, isError, error } = usePostData(id);
  if (isPending) return <h2 className={s.detailsLoading}>Загрузка...</h2>;
  if (isError) return <h2>Ошибка: {error.message}</h2>;
  return (
    <section className={s.detailsPage}>
      <div className="container">
        <div className={s.detailPageWrapper}>
          <h1 className={s.detailTitle}>{post.title}</h1>
          <p className={s.detailDescription}>{post.body}</p>
        </div>
        <NavLink to={-1} className={s.detailsPageBack}>
          Назад
        </NavLink>
      </div>
    </section>
  );
};
