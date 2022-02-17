import React from "react";
import styles from "./featuredMovie.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

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
          <h1>{item.name || item.title}</h1>
        </div>

        <div className={styles.desc}>
          <p>{item.overview}</p>
        </div>

        <div className={styles.buttons}>
          <a className={styles.button_watch} href="">
            <FaPlay className={styles.icon_fa} color="var(--color-white)" size={16} />
            Assistir
          </a>

          <a className={styles.button_more_info} href="">
            <FaInfoCircle className={styles.icon_fa} color="var(--color-white)" size={16} />
            Mais informações
          </a>

          <a href="" className={styles.button_add_list}>
            <AiOutlinePlus className={styles.icon} />
          </a>
        </div>
      </div>
    </section>
  );
};
