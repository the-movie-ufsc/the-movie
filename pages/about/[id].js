import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./about.module.css";
import Episode from "../../components/Shared/Episode";
import Menu from "../../components/Shared/Menu";
import TMDB from "../../components/TMDB";
import { FaInfoCircle, FaPlay } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";

export default function About() {
  const router = useRouter();
  const { id, type } = router.query;

  const [item, setItem] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      let chosenInfo = await TMDB.getMovieInfo(id, type);
      setItem(chosenInfo);
    };

    loadAll();
  }, [id]);

  return (
    <div className={styles.container}>
      <Menu />
      {item && (
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
              <h1>{(item.title && item.title.split(":")[0]) || (item.name && item.name.split(":")[0])}</h1>
            </div>

            <div className={styles.desc}>
              <p>{item.overview}</p>
            </div>

            <div className={styles.rating}>
              <p>{item.number_of_seasons || item.runtime}</p>
              <p>
                {new Date(item.first_air_date).getFullYear() || new Date(item.release_date).getFullYear()}{" "}
              </p>
            </div>

            <div className={styles.movie_progress}>
              <div className={styles.progress_bar}>
                <div className={styles.progress}></div>
              </div>
              <strong>T01:E03</strong>
            </div>

            <div className={styles.buttons}>
              <button className={styles.button_watch} href="">
                <FaPlay className={styles.icon_fa} color="var(--color-white)" size={16} />
                Assistir
              </button>

              <button className={styles.button_more_info} href="">
                <FaInfoCircle className={styles.icon_fa} color="var(--color-white)" size={16} />
                Mais informações
              </button>

              <a href={`/home`} className={styles.button_add_list}>
                <AiOutlinePlus className={styles.icon} />
              </a>
            </div>
          </div>
        </section>
      )}

      {type === "tv" && (
        <div className={styles.eps}>
          <Episode />
          <Episode />
          <Episode />
          <Episode />
          <Episode />
          <Episode />
        </div>
      )}
    </div>
  );
}
