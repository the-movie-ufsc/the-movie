import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import TMDB from "../TMDB"
import MovieRow from "../../components/Shared/MovieRow";
import Menu from "../../components/Shared/Menu";
import FeaturedMovie from "../../components/Shared/FeaturedMovie/index";

export default function Home() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect (() => {
    const loadAll = async () => {         // pegando todas as listas
      let list = await TMDB.getHomeList();
      setMovieList(list);

      //pegando destaque (featured)
      let originals = list.filter(i=>i.slug === 'originals');
      let random = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[random];
      let chosenInfo = await TMDB.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, [])

  return (
    <div className={styles.container}>
      <Menu className={styles.menu} />

      {/* Destaque */}
      {featuredData &&
        <FeaturedMovie className={styles.featured_movie} item={featuredData}/>
      }

      {/* Listas */}
      <section className={styles.list}>
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
      {/* Footer */}

    </div>
  );
}
