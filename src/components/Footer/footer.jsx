import Link from "next/link";
import style from './footer.module.css'

function Footer() {
  return (
    <footer className={style.footer}>
      <div>THE PLANETS</div>
      <div className={style.derechos}>
        Copyright: Adriana - Ema - Franco - Jean - Jefferson - Yael 
      </div>
      <Link href="/about" target="_blank" className={style.link}>
        About me
      </Link>
      <Link
        href="https://github.com/Jefersonsteven/planects-fact-site-with-next"
        target="_blank"
        className={style.link}
      >
        GitHub
      </Link>
    </footer>
  );
}

// link al github:
// https://github.com/Jefersonsteven/planects-fact-site-with-next

export default Footer;
