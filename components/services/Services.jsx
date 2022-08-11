import React from 'react';
import {BiCheck} from 'react-icons/bi'
import styles from '../../styles/services.module.css';
import { useTranslation } from 'react-i18next';


const Services = () => {

  const [t, i18n] = useTranslation("globals");


  return (
    <section id='services'>
      <div className="container services_container">

      <article className='service'>
          <div className="service_head">
            <h3>{t("services.web")}</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>{t("services.creation")}</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>{t("services.software")}</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>{t("services.api")}</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>{t("services.spa")}</p>
            </li>
          </ul>
        </article>

       
        <article className='service'>
          <div className="service_head">
            <h3>{t("services.content")}</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>{t("services.social")}</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>{t("services.blog")}</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>{t("services.ads")}</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>{t("services.seo")}</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>{t("services.skills")}</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Excel</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Photoshop</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Three js</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Illustrator</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services