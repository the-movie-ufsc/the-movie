import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./userList.module.css";

export default ({ title, items }) => {
  const router = useRouter();

  let media_type = null;

  return (
    <div className={styles.movie_row}>
      <h2>{title}</h2>
      <div className={styles.list_area}>
        <div className={styles.movie_row_list}>
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className={styles.moovie_row_item}>
                <Link
                  href={{
                    pathname: "/about/[id]",
                    query: { id: item.id, type: media_type || (item.name ? "tv" : "movie") },
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
