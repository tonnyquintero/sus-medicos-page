import React from 'react';
import Image from 'next/image';
import explorer from '../../assets/1.png';
import next from '../../assets/2.png';
import solidity from '../../assets/3.png';
import styles from '../../styles/testimonials.module.css';

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    image: explorer,
    title: 'La despedida de internet explorer',
    review: 'Que pensamiento o sentimiento se te viene a la mente cuando ves este icono? Quizás nostalgia, algún recuerdo emocionante, antipatía, pero lo más probable es que lo veas y te de enojo, IIRAAA, RABIAAAAAA!!!! Y es que la lentitud...',
    link: 'https://tonnys-lab.blogspot.com/2022/07/la-despedida-de-internet-explorer.html'
  },
  {
    image: next,
    title: 'Mi experiencia con Nextjs',
    review: 'Si de Tecnologías Frontend hablamos, Nextjs debe ser el pináculo, la cúspide, la punta de la pirámide en los sitios web, probablemente te preguntes, si React es un framework (o librería) de javascript, para que necesitamos otro framework ahora para react?',
    link: 'https://tonnys-lab.blogspot.com/2022/07/mi-experiencia-con-nextjs.html'
  },
  {
    image: solidity,
    title: 'El futuro de Solidity',
    review: '  Para entender lo que es Solidity, primero tienes que entender qué son los contratos inteligentes o smart contracts. Se trata de un concepto de contrato que se empezó a debatir en los 90, pero que no ha sido hasta la llegada de las criptomonedas...',
    link: 'https://tonnys-lab.blogspot.com/2022/07/el-futuro-de-solidity.html'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5 className={styles['h5']}>Últimos Posts</h5>
      <h2>Blog</h2>

      <Swiper className={styles['testimonial_container']}
        modules={[ Navigation, Pagination ]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}

      >
        {
          data.map(({image, title, review, link}, index) => {
            return (
              <SwiperSlide key={index} className={styles['testimonial']}>
                <div className={styles["client_avatar"]}>
                  <Image src={image} alt={title} />
                </div>
                <h5 className={styles['client_name']}>{title}</h5>
                  <small className={styles['client_review']}>
                    {review}
                  </small>
                  <a href={link} target="_blank" rel='noreferrer' className={styles['btn_blog']}>Visit</a>
              </SwiperSlide>
            )
          } )
        }

      </Swiper>

    </section>
  )
}

export default Testimonials;