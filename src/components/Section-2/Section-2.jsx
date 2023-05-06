import Section2Button from "../Section-2-Button/Section-2-Button";
import styles from "./Section-2.module.css";

const Section2 = ({ info }) => {
  console.log(info);

  let names = Object.keys(info);

  return (
    <>
      <div className={styles.container}>
        <Section2Button info={`${names[4]} time`} date={info.rotation} />
        <Section2Button info={`${names[5]} time`} date={info.revolution} />
        <Section2Button info={`${names[6]}`} date={info.radius} />
        <Section2Button info={`${names[7]}`} date={info.temperature} />
      </div>
    </>
  );
};

export default Section2;
