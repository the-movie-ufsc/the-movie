import Link from "next/link";
import styles from "./menu.module.css";

export default function Menu() {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div className={styles.logo}>
          <img src="/logo_menu.svg" alt="The Movie" />
        </div>
        <div className={styles.navigation}>
          <Link href="/home">
            <a className={styles.link}>Home</a>
          </Link>
          <Link href="/movies">
            <a className={styles.link}>Filmes</a>
          </Link>
          <Link href="/series">
            <a className={styles.link}>Séries</a>
          </Link>
          <Link href="/list">
            <a className={styles.link}>Minha lista</a>
          </Link>
        </div>

        <div className={styles.search}>
          <input
            type="text"
            placeholder="Pesquise por filme, série, gênero..."
          />
        </div>
        <div className={styles.avatar}>
          <img
            src="https://pbs.twimg.com/media/FFz6f9UVcAQyLhb.jpg"
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  );
}
