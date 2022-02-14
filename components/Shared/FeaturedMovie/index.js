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
          <h1>{item.name}</h1>
        </div>

        <div className={styles.desc}>
          <p>{item.overview}</p>
        </div>

        <div className={styles.buttons}>
          <a className={styles.button_watch} href="">
            <FaPlay color="var(--color-white)" size={20} />
            Assistir
          </a>

          <a className={styles.button_more_info} href="">
            <FaInfoCircle color="var(--color-white)" size={20} />
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
