import React from "react";
import styles from "./Card.module.css";

export default function Card({
  children,
  number = "9999+",
  title = "Title",
  sub_title = "Sub Title",
  bgColor = "#000",
  color = "#fff",
}) {
  return (
    <div
      className={styles.card_body}
      style={{ backgroundColor: bgColor, color: color }}>
      <div
        className={`${styles.card_row} ${styles.card_justify_content_flex_end}`}>
        <div className={styles.card_h1}>{number}</div>
      </div>
      <div
        className={`${styles.card_row} ${styles.card_justify_content_space_between}`}>
        <div className={styles.card_column}>
          <div className={styles.card_row}>{children}</div>
        </div>
        <div className={styles.card_column}>
          <div className={styles.card_row}>
            <div className={styles.card_h2}>{title}</div>
          </div>
          <div className={styles.card_row}>
            <div className={styles.card_h4}>{sub_title}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
