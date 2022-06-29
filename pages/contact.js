import React from 'react'
import styles from '../styles/Contact.module.css';
import Link from 'next/link'

function contact() {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Contact Page</h2>
        <ul className={styles.details}>
            <li className={styles.list}>
                <label className={styles.label}>Name:</label>
                <p className={styles.value}>Mintra Ngamjarurn</p>
            </li>
            <li className={styles.list}>
                <label className={styles.label}>Email:</label>
                <p className={styles.value}>mintrawork1565@gmail.com</p>
            </li>
        </ul>
        <Link href="/"><a>Go Back</a></Link>
    </div>
  )
}

export default contact