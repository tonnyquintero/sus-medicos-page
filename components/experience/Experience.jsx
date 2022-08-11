import React from 'react';
import {ImHtmlFive} from 'react-icons/im';
import {ImCss3} from 'react-icons/im';
import {SiJavascript} from 'react-icons/si';
import {SiTailwindcss} from 'react-icons/si';
import {RiReactjsLine} from 'react-icons/ri';
import {IoLogoNodejs} from 'react-icons/io';
import {TbBrandNextjs} from 'react-icons/tb';
import {SiMysql} from 'react-icons/si';
import {FaDocker} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';




import styles from '../../styles/experience.module.css';

const Experience = () => {

  const [t, i18n] = useTranslation("globals");


  return (
    <section id='experience'>
      <h5>{t('experience.skills')}</h5>
      <h2>{t('experience.title')}</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>{t('experience.frontend')}</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <ImHtmlFive className='experience_details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>{t('experience.advanced')}</small>
              </div>
            </article>
            <article className='experience_details'>
              <ImCss3 className='experience_details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>{t('experience.advanced')}</small>
              </div>
            </article>
            <article className='experience_details'>
              <SiJavascript className='experience_details-icon' />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className='text-light'>{t('experience.intermediate')}</small>
              </div>
            </article>
            <article className='experience_details'>
              <SiTailwindcss className='experience_details-icon' />
              <div>
                <h4>TAILWIND</h4>
                <small className='text-light'>{t('experience.advanced')}</small>
              </div>
            </article>
            <article className='experience_details'>
              <RiReactjsLine className='experience_details-icon' />
              <div>
                <h4>REACT</h4>
                <small className='text-light'>{t('experience.intermediate')}</small>
              </div>
            </article>
          </div>
        </div>


        <div className="experience_backend">
          <h3>{t('experience.backend')}</h3>
          <div className="experience_content">
          <article className='experience_details'>
              <IoLogoNodejs className='experience_details-icon' />
              <div>
                <h4>NODEJS</h4>
                <small className='text-light'>{t('experience.advanced')}</small>
              </div>
            </article>
            <article className='experience_details'>
              <TbBrandNextjs className='experience_details-icon' />
              <div>
                <h4>NEXTJS</h4>
                <small className='text-light'>{t('experience.advanced')}</small>
              </div>
            </article>
            <article className='experience_details'>
              <SiMysql className='experience_details-icon' />
              <div>
                <h4>MYSQL</h4>
                <small className='text-light'>{t('experience.intermediate')}</small>
              </div>
            </article>
            <article className='experience_details'>
              <FaDocker className='experience_details-icon' />
              <div>
                <h4>DOCKER</h4>
                <small className='text-light'>{t('experience.begginer')}</small>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience