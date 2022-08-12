import React from 'react';
import styles from '../../styles/portfolio.module.css';
import Image from 'next/image';
import Store from '../../assets/nextStore.png';
import Rick from '../../assets/rick2.png';
import Task from '../../assets/taskMachine.png';
import Travel from '../../assets/tonnysTravel.png';
import Toscana from '../../assets/toscana.png';
import restaurante from '../../assets/myRestaurante.png';
import { useTranslation } from 'react-i18next';




const data = [
  {
    id: 1,
    title: 'Tu Restaurante App',
    image: restaurante,
    gitHub: 'https://github.com/tonnyquintero/smart-menu',
    deploy: 'https://smart-menu-omega.vercel.app/'
  },
  {
    id: 2,
    title: 'Tonnys Travel',
    image: Travel,
    gitHub: 'https://github.com/tonnyquintero/tonnys-travel',
    deploy: 'https://tonnys-travel.netlify.app/'
  },
  {
    id: 3,
    title: 'Task Machine',
    image: Task,
    gitHub: 'https://github.com/tonnyquintero/Task-Machine',
    deploy: 'https://tonnyquintero.github.io/Task-Machine/'
  },
  {
    id: 4,
    title: 'Next Store',
    image: Store,
    gitHub: 'https://github.com/tonnyquintero/nextstore',
    deploy: 'https://nextstore-neon.vercel.app/'
  },
  {
    id: 5,
    title: 'Rick and Morty Api',
    image: Rick,
    gitHub: 'https://github.com/tonnyquintero/Rick-and-Morty-Api',
    deploy: 'https://rick-and-morty-api-pearl-sigma.vercel.app/'
  },
  {
    id: 6,
    title: 'Carta Toscana',
    image: Toscana,
    gitHub: 'https://github.com/tonnyquintero/carta-toscana',
    deploy: 'https://carta-toscana.vercel.app/'
  },
  
]


const Portfolio = () => {

  const [t, i18n] = useTranslation("globals");


  return (
    <section id='portfolio'>
      <h5>{t("portfolio.work")}</h5>
      <h2>{t("portfolio.title")}</h2>

      <div className={styles["portfolio_container"]}>

        {
          data.map(({id, title, image, gitHub, deploy}, index) => {
            return (
              <article key={index} className={styles['portfolio_item']}>
                <div className={styles["portfolio_item-image"]}>
                  <Image src={image} alt={title} />
                </div>
              <h3>{title}</h3>
              <div className={styles["portfolio_item-cta"]}>
                <a href={gitHub} className='btn' target='_blank' rel='noreferrer'>Git Hub</a>
                <a href={deploy} className='btn btn-primary' target='_blank' rel='noreferrer'>{t("portfolio.visit")}</a>
              </div>
              </article>
            )
          })
        }  

      </div>
    </section>
  )
}

export default Portfolio