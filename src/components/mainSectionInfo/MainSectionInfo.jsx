import Link from "next/link";
import styles from "./Main.module.css"

export function MainSectionInfo({name,content,source}) {
    return (
        <div className={styles.MainSectionInfo}>
            <h5>{name}</h5>
            <p>{content}</p>
            <div className={styles.sourceContainer}>
                <span>Source:</span>
                <Link className={styles.link} href={source}>Wikipedia</Link>
            </div>
        </div>
    );
};