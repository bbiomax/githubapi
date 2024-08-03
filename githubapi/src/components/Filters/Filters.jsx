import { useState } from "react";
import styles from "./Filters.module.css";

export default function Filters() {
  const [isUpwardSelected, setIsUpwardSelected] = useState(false);
  const [isDownwardSelected, setIsDownwardSelected] = useState(false);

  const toggleIsUpwardSelected = () => {
    setIsUpwardSelected((prev) => !prev);
    setIsDownwardSelected(false);
  };

  const toggleIsDownwardSelected = () => {
    setIsDownwardSelected((prev) => !prev);
    setIsUpwardSelected(false);
  };

  return (
    <div className={styles.container}>
      <span>Filters for Repositories:</span>
      <div className={styles.filtersBox}>

        {!isUpwardSelected ? (
          <div onClick={toggleIsUpwardSelected} className={styles.filterItem}>
            По возрастанию
          </div>
        ) : (
          <div onClick={toggleIsUpwardSelected} className={styles.activeFilter}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                clipRule="evenodd"
              />
            </svg>

            <div className={styles.activeFilterItem}>По возрастанию</div>
          </div>
        )}

        {!isDownwardSelected ? (
          <div onClick={toggleIsDownwardSelected} className={styles.filterItem}>
            По убыванию
          </div>
        ) : (
          <div
            onClick={toggleIsDownwardSelected}
            className={styles.activeFilter}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                clipRule="evenodd"
              />
            </svg>

            <div className={styles.activeFilterItem}>По убыванию</div>
          </div>
        )}
      </div>
    </div>
  );
}
