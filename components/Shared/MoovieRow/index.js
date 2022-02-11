import React from "react";
import styles from './moovieRow.module.css';

export default ({title, items}) => {
    return (
        <div className={styles.list}>
            <h2>{title}</h2>
            <div className={styles.listArea}>
                <div className={styles.movieRowList}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className={styles.moovieRowItem}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}