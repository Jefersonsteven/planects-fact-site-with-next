import style from './about.module.css';
import Image from 'next/image';
import Link from 'next/link';


export default function Page() {
  const team = [
    {
      name: 'Jefferson',
      image: 'jef.png'
    },
    {
      name: 'Yael',
      image: 'yael.png'
    },
    {
      name: 'Franco',
      image: 'franco.png'
    },
    {
      name: 'Axel',
      image: 'axel.png'
    },
    {
      name: 'Jean',
      image: 'jean.png'
    },
    {
      name: 'Emmanuel',
      image: 'ema.png'
    },
    {
      name: 'Adriana',
      image: 'adri.png'
    },
    {
      name: 'Celes',
      image: 'celes.png'
    },
    
  ]
  
  return (
    <div className={style.aboutContainer}>
      <div className={style.aboutInfoApp}>
          <Link href='/' className={style.aboutTittle}>The Planets</Link>
          <p className={style.aboutSubTittle}>
          Una web application que ofrece el servicio de Alquiler y venta
          de herramientas usadas entre vecinos es una plataforma en
          línea que permite a los usuarios publicar y buscar herramientas
          que estén disponibles para alquilar o vender dentro de su vecindario 
          o comunidad cercana.
          <br/>
          <br/>
          Somos un equipo de profesionales apasionados por el desarrollo de herramientas 
          tecnológicas que mejoren la vida de las personas. Trabajamos juntos para crear 
          soluciones innovadoras y eficaces que resuelvan los desafíos actuales del 
          mundo digital.
          </p>
      </div>
      <div className={style.aboutCardContainer}>
        {team.map(person => (
          <div key={person.name} className={style.cardInfoTeam}>
              <Image 
                src={`/images-view-about/${person.image}`} 
                width={500} 
                height={500} 
                alt={`Picture of ${person.name}`}
                className={style.aboutImage}
              />
              <h2 className={style.aboutName}>{person.name}</h2>
              <div className={style.aboutLinks}>
                <a href='https://github.com' target='_blanket'>
                  <Image className={style.github} src='/images-view-about/github.png' alt='GitHub' width={35} height={40} />
                </a>
                <a href='https://linkedin.com' target='_blanket'>
                  <Image className={style.linkedin} src='/images-view-about/linkedin.png' alt='LinkedIn'width={50} height={40} />
                </a>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

