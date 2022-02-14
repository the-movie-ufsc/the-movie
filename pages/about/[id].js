import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./about.module.css";
import Episode from "../../components/Shared/Episode";
import Menu from "../../components/Shared/Menu";
import TMDB from "../../components/TMDB";
import { FaInfoCircle, FaPlay } from "react-icons/fa";

export default function About() {
  const router = useRouter();
  const { id, type } = router.query;

  const [item, setItem] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      let chosenInfo = await TMDB.getMovieInfo(id, type ? type : "tv");
      console.log(chosenInfo);
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
              <h1>{item.title || item.name}</h1>
            </div>

            <div className={styles.desc}>
              <p>{item.overview}</p>
            </div>
            <div className={styles.progress}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
            <div className={styles.buttons}>
              <a className={styles.button_watch} href="">
                <FaPlay color="var(--color-white)" size={20} />
                Assistir
              </a>

              <a className={styles.button_more_info} href="">
                <FaInfoCircle color="var(--color-white)" size={20} />
                Mais informações
              </a>
            </div>
          </div>
        </section>
      )}

      <div className={styles.eps}>
        <Episode />
        <Episode />
        <Episode />
        <Episode />
        <Episode />
        <Episode />
      </div>
    </div>
  );
}
