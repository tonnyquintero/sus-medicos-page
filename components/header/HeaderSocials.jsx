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
          <li><a className='fa' href='https://www.linkedin.com/company/sus-m%C3%A9dicos/' target='blank'><BsLinkedin size={40} /></a></li>
          <li><a className='fa' href='https://www.instagram.com/sus.medicos/' target='blank'><BsInstagram size={40} /></a></li>
          <li><a className='fa' href='https://www.facebook.com/susmedicosips' target='blank'><BsFacebook size={45} /></a></li>
        </ul>
    </div>
    <div className={styles.header_socials2}>
        <ul className={styles.social_icons2}>
          <li><a className='fa' href='https://api.whatsapp.com/send?phone=573113725399' target='blank'><BsWhatsapp size={40} /></a></li>
          <li><a className='fa' href='https://www.google.com/maps/dir//Calle+29+AA+%2350+-+09,+Medell%C3%ADn,+Antioquia/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x8e4429b50c9873d9:0xccbf7631256b0d4f?sa=X&ved=2ahUKEwiK_srhzpnsAhXSwFkKHbIuAfkQ9RcwC3oECA8QBA' target='blank'><ImLocation size={40} /></a></li>
          <li><a className='fa' href='mailto:mercadeosusmedicos2015@gmail.com' target='blank'><MdOutlineEmail size={45} /></a></li>
        </ul>
    </div>
    </>
    
  )
}

export default HeaderSocials