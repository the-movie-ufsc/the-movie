import React from "react";
import styles from "./FeaturedMovie.module.css"
import { AiOutlinePlus } from 'react-icons/ai';

export default ({item}) => {
    return (
        <section className={styles.featured} style={{
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
        }}>
            <div className={styles.featured_effect}>
                <div className={styles.featured_name}>{item.name}</div>
                <div className={styles.featured_desc}>{item.overview}</div>
                <div className={styles.featured_buttons}>
                    <a className={styles.button_watch}>Assistir</a>
                    <a className={styles.button_more_info} href="">Mais informações</a>
                    <a href={`/watch/${item.id}`} className={styles.button_add_list}>
                        <AiOutlinePlus className={styles.icon}/>
                    </a>
                </div>
            </div>
        </section> 
    )
}