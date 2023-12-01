import React from 'react';
import {BiCheck} from 'react-icons/bi'
import styles from '../../styles/services.module.css';
import { useTranslation } from 'react-i18next';


const Services = () => {

  const [t, i18n] = useTranslation("globals");


  return (
    <section id='services'>
      <h5 className={styles['h5']}>{t("experience.skills")}</h5>
      <h2>{t("experience.title")}</h2>
      <div className={styles["services_container"]}>

      <article className={styles['service']}>
          <div className={styles["service_head"]}>
            <h3>{t("services.web")}</h3>
          </div>

          <ul className={styles['service_list']}>
            <li>
              <BiCheck className={styles['service_list-icon']} />
              <p>{t("services.creation")}</p>
            </li>
            <li>
              <BiCheck className={styles['service_list-icon' ]} />
              <p>{t("services.software")}</p>
            </li>
            
            <li>
              <BiCheck className={styles['service_list-icon']} />
              <p>{t("services.spa")}</p>
            </li>
          </ul>
        </article>

       
        <article className={styles['service']}>
          <div className={styles["service_head"]}>
            <h3>{t("services.content")}</h3>
          </div>

          <ul className={styles['service_list']}>
            <li>
              <BiCheck className={styles['service_list-icon']} />
              <p>{t("services.social")}</p>
            </li>
            <li>
              <BiCheck className={styles['service_list-icon']} />
              <p>{t("services.blog")}</p>
            </li>
            <li>
              <BiCheck className={styles['service_list-icon']} />
              <p>{t("services.ads")}</p>
            </li>
            <li>
              <BiCheck className={styles['service_list-icon']} />
              <p>{t("services.seo")}</p>
            </li>
          </ul>
        </article>

        <article className={styles['service']}>
          <div className={styles["service_head"]}>
            <h3>{t("services.skills")}</h3>
          </div>

          <ul className={styles['service_list']}>
            <li>
              <BiCheck className={styles['service_list-icon']} />
              <p>{t("services.programs")}</p>
            </li>
            <li>
              <BiCheck className={styles['service_list-icon']} />
              <p>{t("services.profesiograma")}</p>
            </li>
            <li>
              <BiCheck className={styles['service_list-icon']} />
              <p>{t("services.bateria")}</p>
            </li>
            <li>
              <BiCheck className={styles['service_list-icon']} />
              <p>{t("services.matriz")}</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services