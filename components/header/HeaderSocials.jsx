import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiFillTwitterSquare} from 'react-icons/ai';
import styles from '../../styles/header.module.css';

const HeaderSocials = () => {
  return (
    <div className={styles.header_socials}>
        <ul className={styles.social_icons}>
          <li><a className='fa' href='https://www.linkedin.com/in/anthony-quintero-216767182/' target='blank'><BsLinkedin size={40} /></a></li>
          <li><a className='fa' href='https://github.com/tonnyquintero' target='blank'><FaGithub size={40} /></a></li>
          <li><a className='fa' href='https://twitter.com/tonny_187' target='blank'><AiFillTwitterSquare size={45} /></a></li>
        </ul>
    </div>
  )
}

export default HeaderSocials