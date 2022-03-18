import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./movieRow.module.css";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

export default ({ title, items }) => {
  const [scroll, setscroll] = useState(0);

  const router = useRouter();

  let media_type = null;

  if (router.pathname == "/movies") {
    media_type = "movie";
  } else if (router.pathname == "/series") {
    media_type = "tv";
  }
  const scroll_left = () => {
    let x = scroll + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setscroll(x);
  };

  const scroll_right = () => {
    let x = scroll - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 193;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 120;
    }
    setscroll(x);
  };

  return (
    <div className={styles.movie_row}>
      <h2>{title}</h2>
      <div className={styles.movierow_left} onClick={scroll_left}>
        <BsFillCaretLeftFill style={{ fontSize: 40 }} />
      </div>

      <div className={styles.movierow_right} onClick={scroll_right}>
        <BsFillCaretRightFill style={{ fontSize: 40 }} />
      </div>

      <div className={styles.list_area}>
        <div className={styles.movie_row_list} style={{ marginLeft: scroll }}>
          {items.results &&
            items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className={styles.moovie_row_item}>
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
        </div>
      </div>
    </div>
  );
};
