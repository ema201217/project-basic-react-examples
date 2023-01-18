import React from 'react'
import styles from "./styles.module.css";

export const ProgressBar2 = ({now,label}) => {
  return (
    <div /* className="progressContainer" */ className={styles.progressContainer}>
      <span /* className="bar" */ className={styles.bar} style={{width: `${now}%`}}></span>
      <span /* className="number" */ className={styles.number}>{label}</span>
    </div>
  )
}