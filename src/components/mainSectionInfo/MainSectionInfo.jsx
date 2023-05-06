import Link from "next/link";
import styles from "./Main.module.css";

export function MainSectionInfo({ info }) {
  const { name, overview } = info;
  const urlwiki = `https://en.wikipedia.org/wiki/${name}_(planet)`;
  return (
    <div className={styles.MainSectionInfo}>
      <h5>{name}</h5>
      <p>{overview.content}</p>
      <div className={styles.sourceContainer}>
        <span>Source:</span>
        <Link className={styles.link} href={urlwiki}>
          Wikipedia
        </Link>
      </div>
    </div>
  );
}
