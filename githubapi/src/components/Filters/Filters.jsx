import styles from "./Filters.module.css";

export default function Filters() {
  return (
    <div className={styles.container}>
      <span>Filters for Repositories:</span>
      <div className={styles.filtersBox}>
        <div className={styles.filterItem}>По умолчанию</div>

        <div className={styles.filterItem}>По возрастанию</div>

        <div className={styles.filterItem}>По убыванию</div>
      </div>
    </div>
  );
}
