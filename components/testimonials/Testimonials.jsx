import React from 'react';
import Image from 'next/image';
import explorer from '../../assets/round logo.png';
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