import React, {useRef} from 'react';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import styles from '../../styles/contact.module.css';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';


const Contact = () => {

  const [t, i18n] = useTranslation("globals");


  const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ksurb6o', 'template_0q1n6da', form.current, 'Wl-IzJ1QuHrMQ0XAc')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
    };

  return (
    <section id='contact'>
      <h5 className={styles['h5']}>{t("contact.touch")}</h5>
      <h2>{t("contact.me")}</h2>

      <div className="container">
        <div className={styles.containor}>
          <div className={styles["contact_options"]}>
            <article className={styles['contact_option']}>
              <MdOutlineEmail className={styles['contact_option-icon']} />
              <h4>Email</h4>
              <h5>susmedicos@gmail.com</h5>
              <a className={styles['clasa']} href="mailto:mercadeosusmedicos2015@gmail.com" target="_blank" rel='noreferrer'>{t("contact.sendA")}</a>
            </article>

            <article className={styles['contact_option']}>
              <RiMessengerLine className={styles['contact_option-icon']} />
              <h4>Messenger</h4>
              <h5>Sus médicos</h5>
              <a className={styles['clasa']} href="https://m.me/susmedicos.12" target="_blank" rel='noreferrer'>{t("contact.sendA")}</a>
            </article>

            <article className={styles['contact_option']}>
              <BsWhatsapp className={styles['contact_option-icon']} />
              <h4>Whatsapp</h4>
              <h5>+573113725399</h5>
              <a className={styles['clasa']} href="https://api.whatsapp.com/send?phone=573113725399" target="_blank" rel='noreferrer'>{t("contact.sendA")}</a>
            </article>
          </div>
          <form className={styles['form']} ref={form} onSubmit={sendEmail} >
            <input className={styles.input} type="text" name="name" placeholder={t("contact.name")} required />
            <input className={styles.input} type="email" name='email' placeholder={t("contact.email")} required />
            <textarea className={styles.textarea} name="message" placeholder={t("contact.message")} rows="7" required></textarea>
            <button type='submit' className='btn'>{t("contact.send")}</button>
          </form>
        </div>
      </div>
      
    </section>
  )
}

export default Contact