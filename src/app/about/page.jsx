import style from './about.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  const team = [
    {
      name: 'Jefferson',
    },
    {
      name: 'Yael',
    },
    {
      name: 'Franco',
    },
    {
      name: 'Axel',
    },
    {
      name: 'Jean',
    },
    {
      name: 'Emmanuel',
    },
    {
      name: 'Adriana',
    },
    
  ]
  
  return (
    <div className={style.aboutContainer}>
      <div className={style.aboutInfoApp}>
          <h1 className={style.aboutTittle}>The Planets</h1>
          <p className={style.aboutSubTittle}>
          Una web application que ofrece el servicio de Alquiler y venta
          de herramientas usadas entre vecinos es una plataforma en
          línea que permite a los usuarios publicar y buscar herramientas
          que estén disponibles para alquilar o vender dentro de su vecindario o comunidad cercana.
          </p>
      </div>
      <div className={style.aboutCardContainer}>
        {team.map(person => (
          <div key={person.name} className={style.cardInfoTeam}>
             
              <h2 className={style.aboutName}>{person.name}</h2>
              <div className={style.aboutLinks}>
                <Link href='/'>github</Link>
                <Link href='/'>linkedin</Link>
              </div>
          </div>
        ))}
      </div>
    </div>
    );
  }

