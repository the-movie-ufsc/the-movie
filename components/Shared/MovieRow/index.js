import React from "react";
import styles from "./movieRow.module.css";

export default ({ title, items }) => {
  return (
    <div className={styles.movie_row}>
      <h2>{title}</h2>
      <div className={styles.list_area}>
        <div className={styles.movie_row_list}>
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className={styles.moovie_row_item}>
                <img
                  className={styles.img}
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
