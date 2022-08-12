import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {MdOutlineEmail} from 'react-icons/md';
import {FaBloggerB} from 'react-icons/fa';
import {ImLocation} from 'react-icons/im'
import styles from '../../styles/header.module.css';

const HeaderSocials = () => {
  return (
    <>
      <div className={styles.header_socials}>
        <ul className={styles.social_icons}>
          <li><a className='fa' href='https://www.linkedin.com/in/anthony-quintero-216767182/' target='blank'><BsLinkedin size={40} /></a></li>
          <li><a className='fa' href='https://github.com/tonnyquintero' target='blank'><BsInstagram size={40} /></a></li>
          <li><a className='fa' href='https://twitter.com/tonny_187' target='blank'><BsFacebook size={45} /></a></li>
        </ul>
    </div>
    <div className={styles.header_socials2}>
        <ul className={styles.social_icons2}>
          <li><a className='fa' href='https://www.linkedin.com/in/anthony-quintero-216767182/' target='blank'><BsWhatsapp size={40} /></a></li>
          <li><a className='fa' href='https://github.com/tonnyquintero' target='blank'><ImLocation size={40} /></a></li>
          <li><a className='fa' href='https://twitter.com/tonny_187' target='blank'><MdOutlineEmail size={45} /></a></li>
        </ul>
    </div>
    </>
    
  )
}

export default HeaderSocials