import s from "./Header.module.scss";
import "../../styles/global.scss";
import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <div className={s.header}>
      <div className="container">
        <div className={s.headerItem}>
          <h2 className={s.headerTitle}>JSON Posts</h2>
          <NavLink className={s.headerNavLink}>Главная</NavLink>
        </div>
      </div>
    </div>
  );
};
