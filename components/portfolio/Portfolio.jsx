import React from 'react';
import styles from '../../styles/portfolio.module.css';
import Image from 'next/image';
import Store from '../../assets/1.png';
import Rick from '../../assets/2.png';
import Task from '../../assets/3.png';
import Travel from '../../assets/4.png';
import Toscana from '../../assets/5.png';

import { useTranslation } from 'react-i18next';




const data = [
  {
    id: 2,
    title: 'Portafolio Completo',
    image: Store,
    gitHub: 'https://github.com/tonnyquintero/nextstore',
    deploy: '/portafolio'
  },

  {
    id: 3,
    title: 'Ficha integral 1',
    image: Task,
    gitHub: 'https://github.com/tonnyquintero/Task-Machine',
    deploy: '/ficha1'
  },

  {
    id: 4,
    title: 'Conductor de Vehiculo o Mensajería',
    image: Travel,
    gitHub: 'https://github.com/tonnyquintero/tonnys-travel',
    deploy: '/conductor'
  },

  {
    id: 5,
    title: 'Trabajo en Alturas',
    image: Rick,
    gitHub: 'https://github.com/tonnyquintero/Rick-and-Morty-Api',
    deploy: '/alturas'
  },
  {
    id: 6,
    title: 'Manipulación de Alimentos',
    image: Toscana,
    gitHub: 'https://github.com/tonnyquintero/carta-toscana',
    deploy: '/manipulacion'
  },
  
]


const Portfolio = () => {

  const [t, i18n] = useTranslation("globals");


  return (
    <section id='portfolio'>
      <h5 className={styles['h5']}>{t("portfolio.work")}</h5>
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
                <a href={deploy} className='btn btn-primary' >{t("portfolio.visit")}</a>
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