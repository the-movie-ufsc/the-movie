import React, { useEffect, useState } from "react";
import styles from "./search.module.css";
import MovieRow from "../../components/Shared/MovieRow";
import Menu from "../../components/Shared/Menu";
import Footer from "../../components/Shared/Footer";
import TMDB from "../../components/TMDB";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Search() {
  const router = useRouter();
  const { query } = router.query;

  const [items, setItems] = useState([]);

  let media_type = null;

  if (router.pathname == "/movies") {
    media_type = "movie";
  } else if (router.pathname == "/series") {
    media_type = "tv";
  }

  useEffect(() => {
    const load = async () => {
      let list = await TMDB.getSearch(query);
      setItems(list);
    };
    load();
  }, [query]);

  return (
    <>
      <Head>
        <title>Search | The Movie</title>
        <meta property="og:title" content="Home The Movie" key="title" />
      </Head>
      <div className={styles.container}>
        <Menu className={styles.menu} />

        <div className={styles.search}>
          <section className={styles.list}>
            {items.results &&
              items.results.length > 0 &&
              items.results.map((item, key) => (
                <div key={key} className={styles.item}>
                  <Link
                    href={{
                      pathname: "/about/[id]",
                      query: {
                        id: item.id,
                        type: media_type || (item.name ? "tv" : "movie"),
                      },
                    }}
                  >
                    <img
                      className={styles.img}
                      src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                      alt={item.title}
                    />
                  </Link>
                </div>
              ))}
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
}
