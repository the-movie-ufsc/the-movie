import React from "react";
import styles from "./featuredMovie.module.css";
import { AiOutlinePlus } from "react-icons/ai";

export default ({ item }) => {
  return (
    <section
      className={styles.cover}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundImage: `linear-gradient(90deg, #171717 5%, transparent), url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className={styles.info}>
        <div className={styles.name}>
          <h1>{item.name}</h1>
        </div>

        <div className={styles.desc}>
          <p>{item.overview}</p>
        </div>

        <div className={styles.buttons}>
          <a className={styles.button_watch}>Assistir</a>
          <a className={styles.button_more_info} href="">
            Mais informações
          </a>
          <a href={`/watch/${item.id}`} className={styles.button_add_list}>
            <AiOutlinePlus className={styles.icon} />
          </a>
        </div>
      </div>
    </section>
  );
};
