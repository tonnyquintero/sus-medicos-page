/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {FaBloggerB} from 'react-icons/fa';
import {BiMessageSquareDetail} from 'react-icons/bi';
import styles from '../../styles/nav.module.css';

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav className={styles.nav}>
      <a onClick={() => setActiveNav('#')} 
      className={activeNav === '#' ? styles.active : ''}
      href='#'><AiOutlineHome /></a>
      <a href='#about' 
      onClick={() => setActiveNav('#about')} 
      className={activeNav === '#about' ? styles.active : ''}><AiOutlineUser /></a>
      <a href='#portfolio'
      onClick={() => setActiveNav('#portfolio')} 
      className={activeNav === '#portfolio' ? styles.active : ''}><BiBook /></a>
      <a href='#testimonials'
      onClick={() => setActiveNav('#testimonials')} 
      className={activeNav === '#testimonials' ? styles.active : ''}><FaBloggerB /></a>
      <a href='#contact'
      onClick={() => setActiveNav('#contact')} 
      className={activeNav === '#contact' ? styles.active : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav;