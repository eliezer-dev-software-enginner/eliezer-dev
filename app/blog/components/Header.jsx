'use client';

import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import styles from './Header.module.css';

export default function Header() {
  const { user, logOut } = useAuth();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href='/blog' className={styles.logo}>
          Blog do Eliezer Dev
        </Link>
        <nav className={styles.nav}>
          <Link href='/blog' className={styles.navLink}>
            Home
          </Link>

          {user ? (
            <>
              <Link href='/blog/create' className={styles.navLink}>
                Criar Post
              </Link>
              <button
                onClick={logOut}
                className={styles.navLink}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                }}
              >
                Sair
              </button>
              {/* Optional: User Avatar */}
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  style={{
                    width: '2rem',
                    height: '2rem',
                    borderRadius: '50%',
                    border: '2px solid var(--primary)',
                  }}
                />
              )}
            </>
          ) : (
            <Link
              href='/blog/login'
              className={styles.navLink}
              style={{ color: 'var(--primary)' }}
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
