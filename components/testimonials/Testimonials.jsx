import React from 'react';
import Image from 'next/image';
import BurnOut from '../../assets/BurnOutWeb.png'
import Industrial from '../../assets/industrial.png';
import añoVeinte from '../../assets/añoVeinte.png';
import añoCincuenta from '../../assets/añocincuenta.png';
import añoSetenta from '../../assets/setentas.png';
import Historia from '../../assets/historiaBlog.png'
import explorer from '../../assets/round logo.png';
import discapacidad from '../../assets/discapacidad.png';
import futuro from '../../assets/future.png';
import lsv from '../../assets/lsv.png'
import spoiler from '../../assets/spoiler.png'
import visiometria from '../../assets/post6.png';
import styles from '../../styles/testimonials.module.css';

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    image: añoSetenta,
    title: 'MEDICINA DEL TRABAJO EP. IV -LOS AÑOS 70-',
    review: 'Hola familia 🦉 bienvenidos y bienvenidas a un nuevo año cargado de información ocupacional, continuamos con la saga que ha recorrido los acontecimientos del mundo y sobre todo de nuestra querida Colombia en temas de medicina del trabajo, esta vez con la década de los 70s donde la tecnología avanza, las industrias hacen lo propio y la salud ocupacional no se queda atrás...',
    link: 'https://sus-medicos.blogspot.com/2024/01/medicina-del-trabajo-ep-iv-los-anos-70.html'
  },
  {
    image: añoCincuenta,
    title: 'MEDICINA DEL TRABAJO EP. III -LOS AÑOS 50-',
    review: 'Bienvenidos y bienvenidas a un nuevo capítulo de la histórica saga que lleva por nombre "Medicina del trabajo" donde trazamos una línea temporal con acontecimientos destacados y que han llevado a la medicina del trabajo a lo que es hoy en día, en este capítulo abordamos la década de los 50s, un mundo en reestructuración con el suceso de la guerra mundial muy presente pero con la esperanza en incremento...',
    link: 'https://sus-medicos.blogspot.com/2023/09/medicina-del-trabajo-ep-iii-los-anos-50.html'
  },
  {
    image: añoVeinte,
    title: 'MEDICINA DEL TRABAJO EP. II -LOS AÑOS 20-',
    review: 'Hola familia, bienvenidos al segundo capitulo de la serie "medicina del trabajo" en la que abordamos el crecimiento de esta disciplina desde sus orígenes hasta llegar a ser lo que es el día de hoy, en esta ocasión presentamos los años 20, los locos años 20 como algunos historiadores llaman a esta época debido a su vertiginoso ritmo en muchos aspectos. ...',
    link: 'https://sus-medicos.blogspot.com/2023/06/medicina-del-trabajo-ep-ii-los-anos-20.html'
  },
  {
    image: Industrial,
    title: 'MEDICINA DEL TRABAJO EP. I -REVOLUCIÓN INDUSTRIAL-',
    review: 'El acontecimiento que moldeó nuestro oficio definitivamente tuvo una época puntual en la historia, hablemos sobre el impacto que tuvo la revolución industrial cuyo nacimiento se desarrolló en la Gran Bretaña, sobre la medicina del trabajo y la salud ocupacional...',
    link: 'https://sus-medicos.blogspot.com/2023/05/medicina-del-trabajo-ep-i-revolucion.html'
  },
  {
    image: futuro,
    title: 'EL FUTURO DE LA MEDICINA DEL TRABAJO',
    review: 'Pensar el lo que va a pasar es de precavidos o de necios? Quizás un poco de las dos, por un lado nos ayuda a prepararnos, a tener una visión que nos pueda dar ventaja, pero por otro lado no son más que simples especulaciones. Es probable que el futuro de la medicina del trabajo esté determinado por varias tendencias y desarrollos...',
    link: 'https://sus-medicos.blogspot.com/2023/04/el-futuro-de-la-medicina-del-trabajo.html'
  },
  {
    image: Historia,
    title: 'SALUD OCUPACIONAL COLOMBIANA -ORÍGENES-',
    review: 'Hablar de salud ocupacional en Colombia es hablar de más de un siglo de historia, un tópico que bien podría dar para una novela de 100 capítulos, pero solo disponemos de un artículo y de una pequeña porción de tu tiempo así que, con mucho desmenuzamiento, he aquí una breve reseña...',
    link: 'https://sus-medicos.blogspot.com/2023/02/salud-ocupacional-colombiana-origenes.html'
  },
  {
    image: visiometria,
    title: 'La realidad virtual, el futuro de la Visiometría',
    review: 'Año 2022 y los autos aún no vuelan, si bien es cierto que la creatividad siempre va más rápido que los avances científicos. Estamos aún muy lejos de la distopía ciberpunk que tanto venden las grandes productoras. Sin embargo a un nivel más realista, estamos dando grandes avances tecnológicos cada año que no debemos pasar por alto...',
    link: 'https://sus-medicos.blogspot.com/2022/12/la-realidad-virtual-el-futuro-de-la_9.html'
  },
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