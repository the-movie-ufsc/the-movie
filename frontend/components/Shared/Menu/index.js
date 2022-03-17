import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./menu.module.css";

export default function Menu() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div className={styles.logo}>
          <img src="/logo_menu.svg" alt="The Movie" />
        </div>
        <div className={styles.navigation}>
          <Link href="/home">
            <a className={router.pathname == "/home" ? styles.active : styles.link}>Home</a>
          </Link>
          <Link href="/movies">
            <a className={router.pathname == "/movies" ? styles.active : styles.link}>Filmes</a>
          </Link>
          <Link href="/series">
            <a className={router.pathname == "/series" ? styles.active : styles.link}>Séries</a>
          </Link>
          <Link href="/list">
            <a className={router.pathname == "/list" ? styles.active : styles.link}>Minha lista</a>
          </Link>
        </div>

        <div className={styles.search}>
          <input type="text" placeholder="Pesquise por filme, série, gênero..." />
        </div>
        <Link href="/settings">
          <a className={styles.avatar}>
            <img src="https://pbs.twimg.com/media/FFz6f9UVcAQyLhb.jpg" alt="Avatar" />
          </a>
        </Link>
      </div>
    </div>
  );
}
