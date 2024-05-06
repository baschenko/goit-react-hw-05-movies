import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

export const Layout = () => {
  return (
    <div>
      <header className={styles.header}>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) =>
              [styles.link, isActive ? styles.activeLink : ''].join(' ')
            }
          >
            Home
          </NavLink>
          <NavLink
            to="movies"
            className={({ isActive }) =>
              [styles.link, isActive ? styles.activeLink : ''].join(' ')
            }
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
