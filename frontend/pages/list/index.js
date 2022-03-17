import React, { useEffect, useState } from "react";
import MovieRow from "../../components/Shared/MovieRow";
import styles from "./list.module.css";
import Menu from "../../components/Shared/Menu";
import TMDB from "../../components/TMDB";
import Footer from "../../components/Shared/Footer";
import Head from "next/head";

export default function List() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      // pegando todas as listas
      const list = await TMDB.getHomeList();
      setMovieList(list);
    };

    loadAll();
  }, []);

  return (
    <>
      <Head>
        <title>Minha lista | The Movie</title>
        <meta property="og:title" content="Minha lista The Movie" key="title" />
      </Head>

      <div className={styles.container}>
        <Menu className={styles.menu} />

        <h1 className={styles.title}>Minha lista</h1>

        {/* Listas */}
        <section className={styles.list}>
          {movieList.map((item, key) => (
            <MovieRow key={key} title="" items={item.items} />
          ))}
        </section>

        <Footer />
      </div>
    </>
  );
}
