import React from 'react'
import Image from 'next/image';
import styles from '../../styles/about.module.css';
import AboutPic from '../../assets/Sus médicos location.png';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';
import { useTranslation } from 'react-i18next';

const About = () => {

  const [t, i18n] = useTranslation("globals");

  return (
    <section className={styles['nosotros']} id='about'>
      <h5>{t('about.getToKnow')}</h5>
      <h2>{t('about.aboutMe')}</h2>

    <div className={styles['about_container']}>
      <div className={styles.about_me}>
        <div className={styles['about_me-image']}>
          <Image src={AboutPic} alt="acerca de mi" />
        </div>
      </div>
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