import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import TMDB from "../TMDB";
import MovieRow from "../../components/Shared/MovieRow";
import Menu from "../../components/Shared/Menu";

export default function Home() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      // pegando todas as listas
      let list = await TMDB.getHomeList();
      setMovieList(list);
    };

    loadAll();
  }, []);

  return (
    <div className={styles.container}>
      {/* Menu */}
      <Menu />
      {/* Destaque */}

      {/* Listas */}
      <section className={styles.list}>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      {/* Footer */}
    </div>
  );
}
