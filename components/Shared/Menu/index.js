import styles from "./menu.module.css";

export default function Menu() {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div className={styles.logo}>The Movie</div>
        <ul className={styles.navigation}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#news">Filmes</a>
          </li>
          <li>
            <a href="#contact">Séries</a>
          </li>
          <li>
            <a href="#about">Minha lista</a>
          </li>
        </ul>
        <div className={styles.search}>Search</div>
        <div className={styles.avatar}>Avatar</div>
      </div>
    </div>
  );
}
