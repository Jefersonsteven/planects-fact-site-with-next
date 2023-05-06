import Link from "next/link";
import styles from "./Main.module.css";

export function MainSectionInfo({ info, submenu }) {

  return (
    <div className={styles.MainSectionInfo}>
      <h5>{info.name}</h5>
      <p>{info[submenu].content}</p>
      <div className={styles.sourceContainer}>
        <span>Source:</span>
        <Link target="_blank" className={styles.link} href={info[submenu].source}>
          Wikipedia
        </Link>
      </div>
    </div>
  );
}
