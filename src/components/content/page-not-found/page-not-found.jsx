import React from "react";
import styles from './page-not-found.module.css';

const PageNotFound = ()=>{
    return (
        <div className={styles.page}>
            <h1>Page 404</h1>
            <div>Такой страницы не существует</div>
        </div>
    )
};

export default PageNotFound;