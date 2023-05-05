import Section2Button from "../Section-2-Button/Section-2-Button";
import styles from "./Section-2.module.css";

const Section2 = ({ info = "Rotation time", date = "58.6 DAYS" }) => {
  return (
    <>
      <div className={styles.container}>
        <Section2Button info={info} date={date} />
      </div>
    </>
  );
};

export default Section2;
