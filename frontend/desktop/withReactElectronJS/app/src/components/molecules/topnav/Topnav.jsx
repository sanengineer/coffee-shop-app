import React from "react";
import Search from "../search/Search";
import styles from "./Topnav.module.css";

function Topnav() {
  return (
    <div className={`top-bar ${styles.right_part}`}>
      <div className={styles.search_bar_container}>
        <div className={styles.search_bar}>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Topnav;
