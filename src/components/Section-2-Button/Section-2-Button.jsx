import styles from "./Section-2-Button.module.css";
import { Antonio } from "next/font/google";

const antonio = Antonio({ subsets: ["latin"] });

const Section2Button = ({ info, date }) => {
  return (
    <div className={styles.containerInfo}>
      <p className={styles.textInfo}>{info}</p>
      <p className={styles.dataInfo}>{date}</p>
    </div>
  );
};

export default Section2Button;