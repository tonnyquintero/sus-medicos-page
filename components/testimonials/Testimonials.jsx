import React from 'react';
import Image from 'next/image';
import BurnOut from '../../assets/BurnOutWeb.png'
import explorer from '../../assets/round logo.png';
import discapacidad from '../../assets/discapacidad.png';
import lsv from '../../assets/lsv.png'
import spoiler from '../../assets/spoiler.png'
import styles from '../../styles/testimonials.module.css';

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    image: spoiler,
    title: 'Sus Médicos te da un SPOILER antes de entrar a tu trabajo',
    review: 'Como si de una escena post-crédito de Marvel que tratara, nuestra institución te da un pequeño gran adelanto de como va a ser tu experiencia en el trabajo al cual vas a ingresar. ¿Cómo es esto posible? Aquí la contundente respuesta...',
    link: 'https://sus-medicos.blogspot.com/2022/10/sus-medicos-te-da-un-spoiler-antes-de.html'
  },
  {
    image: lsv,
    title: 'Realidades históricas en la comunidad sorda',
    review: '¿Sabías que durante muchos años la lengua de señas fue prohibida? A un punto en que algunos colegios les ataban las manos a los estudiantes sordos para obligarlos a aprender el lenguaje oral, como ocurrió en Suiza e incluso, Colombia...',
    link: 'https://sus-medicos.blogspot.com/2022/09/realidades-historicas-en-la-comunidad.html'
  },
  {
    image: BurnOut,
    title: 'La sobrecarga de dopamina te hace un trabajador "Quemado"',
    review: 'La dopamina en exceso está arruinando tu vida. ¿Recuerdas a tu persona antes del internet? ¿Recuerdas lo memorable que eran las películas? las canciones, los reencuentros con amigos, pues la frase "ya nada es como antes" tiene más vigencia que nunca...',
    link: 'https://sus-medicos.blogspot.com/2022/09/la-sobrecarga-de-dopamina-te-hace-un.html'
  },
  {
    image: discapacidad,
    title: 'Discapacidad. Una nueva realidad',
    review: 'Seguramente estás familiarizado con el termino discapacidad, probablemente alguna persona allegada a tu circulo de amigos o familiares posee una. O simplemente vez las rampas en las zonas a donde te diriges...',
    link: 'https://sus-medicos.blogspot.com/2022/08/discapacidad-una-nueva-realidad.html'
  },
  {
    image: explorer,
    title: 'La importancia de un Blog en una empresa',
    review: 'Con la llegada de los Blogs, la producción de la información dejo de ser exclusiva de los grandes medios y llego al alcance de cualquier persona o empresa, esto generó la aparición de micro-medios...',
    link: 'https://sus-medicos.blogspot.com/2022/08/la-importancia-de-un-blog-en-una-empresa.html'
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
                  <a href={link} target="_blank" rel='noreferrer' className={styles['btn_blog']}>Visitar</a>
              </SwiperSlide>
            )
          } )
        }

      </Swiper>

    </section>
  )
}

export default Testimonials;