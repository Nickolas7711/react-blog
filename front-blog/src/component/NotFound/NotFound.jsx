import React from 'react'
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <>
       <h1>
      404
      <span aria-hidden="true">404</span>
    </h1>
    <div className={styles.cloak__wrapper}>
      <div className={styles.cloak__container}>
        <div className={styles.cloak}></div>
      </div>
    </div>
    <div className={styles.info}>
      <p>
        We're fairly sure that page used to be here, but seems to have gone
        missing. We do apologise on it's behalf.
      </p>
      <a className={styles.follow}
        href="https://blog.kuniev.pp.ua"
        target="_blank"
        rel="noreferrer noopener"
        >Follow</a
      >
    </div>
    </>
  )
}

export default NotFound
