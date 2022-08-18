import React from 'react'
import Image from 'next/image';
import styles from '../../styles/about.module.css';
import AboutPic from '../../assets/sus1.jpg';
import dayana from '../../assets/drJorge.jpg';
import nexto from '../../assets/visiometria.jpg';
import next from '../../assets/vicky.jpg';
import solidity from '../../assets/audiometria.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';
import { useTranslation } from 'react-i18next';

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    image: AboutPic,
    title: 'La despedida de internet explorer'
  },
  {
    image: nexto,
    title: 'Mi experiencia con Nextjs',
  },
  {
    image: solidity,
    title: 'El futuro de Solidity'
  },
  {
    image: dayana,
    title: 'El futuro de Solidityom'
  },
  {
    image: next,
    title: 'Mi experiencia con Nextjs',
  },
]

const About = () => {

  const [t, i18n] = useTranslation("globals");

  return (
    <section className={styles['nosotros']} id='about'>
      <h5 className={styles['h5']}>{t('about.getToKnow')}</h5>
      <h2>{t('about.aboutMe')}</h2>

      <div className={styles['about_container']}>


      <Swiper className={styles['about_me']}
        modules={[ Navigation, Pagination ]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}>

{
          data.map(({image, title}, index) => {
            return (

              <SwiperSlide key={index} className={styles.about_me}>

    

        <div className={styles['about_me-image']}>
          <Image src={image} alt={title} />
        </div>

      </SwiperSlide>

)
} )
}

      </Swiper>



      <div className={styles.about_content}>
        <div className={styles.about_cards}>
          <article className={styles.about_card}>
            <FaAward className={styles.about_icon}/>
            <h5>{t('about.experience')}</h5>
            <small>{t('about.years')}</small>
          </article>
          <article className={styles.about_card}>
            <FiUsers className={styles.about_icon}/>
            <h5>{t('about.clients')}</h5>
            <small>{t('about.clientsNumber')}</small>
          </article>
          <article className={styles.about_card}>
            <VscFolderLibrary className={styles.about_icon}/>
            <h5>{t('about.projects')}</h5>
            <small>{t('about.ProjectsNumber')}</small>
          </article>
        </div>
        <p>
          {t('about.description')}
        </p>
        <a href='#contact' className={styles['about_button']}>{t('about.letsTalk')}</a>
      </div>
    </div>
    </section>
  )
}

export default About