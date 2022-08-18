/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import {FiInstagram} from 'react-icons/fi';

import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import styles from '../../styles/footer.module.css';
import { useTranslation } from 'react-i18next';


const Footer = () => {

  const [t, i18n] = useTranslation("globals");


  return (
    <footer className={styles.footer}>
      <a href='#' className={styles.footer_logo}>SUS MÉDICOS S.A.S. &copy;</a>

      <ul className={styles.permalinks}>
        <li><a href='#'>{t("footer.home")}</a></li>
        <li><a href='#about'>{t("footer.about")}</a></li>
        <li><a href='#services'>{t("footer.services")}</a></li>
        <li><a href='#portfolio'>{t("footer.portfolio")}</a></li>
        <li><a href='#testimonials'>{t("footer.blog")}</a></li>
        <li><a href='#contact'>{t("footer.contact")}</a></li>
      </ul>

      <div className={styles.footer_socials}>
        <a href='https://www.facebook.com/susmedicosips' target='blank'><BsFacebook /></a>
        <a href='https://www.instagram.com/sus.medicos/' target='blank'><FiInstagram /></a>
        <a href='https://www.linkedin.com/company/sus-m%C3%A9dicos/' target='blank'><BsLinkedin /></a>
      </div>

      <div className={styles.footer_copyright}>
        <small>{t("footer.developed")} Anthony Quintero &copy; {t("footer.all")}</small>
      </div>

    </footer>
  )
}

export default Footer