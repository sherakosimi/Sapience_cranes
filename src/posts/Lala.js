import React, { useState, useEffect } from "react";
//import { navigate } from "@reach/router";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "framer-motion";
import slide1 from '../assets/slidephoto12.JPG'
import slide2 from '../assets/slidephoto22.JPG'
import slide3 from '../assets/slidephoto32.JPG'
import logo from '../assets/newlogo.png'
import logo1 from '../assets/newlogowhite.png'
import appicon from '../assets/application.png'
import appicon2 from '../assets/applicationwhite.png'
import podshipnik from '../assets/podshipnik.png'
import dvigatel from '../assets/dvigatel.jpg'
import kabina from '../assets/kabina.jpg'
import tormoz from '../assets/tormoz.jpg'
import povorot from '../assets/povorot.png'
import engine from '../assets/engine.png'
import pribor from '../assets/pribor.jpg'
import kokos from '../assets/sekciya.JPG'
import Aos from 'aos';
import 'aos/dist/aos.css';
import './styles.css';
import { navigate } from "@reach/router";

function onAppClick() {
  navigate("/application")
}

function Lala() {

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    }
    else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground)


  return (
    <html>
      <head>
        <link rel="icon" href="crane.ico"/> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Sapience Cranes</title>
      </head>
      <body className='body'>
        <nav className={navbar ? 'navbar active' : 'navbar'}>
          <img alt="logo" src={navbar ? logo : logo1} className='img' />
          <h1 className={navbar ? 'h1' : 'h1 h2'}>SAPIENCE CRANES</h1>
          <button className={navbar ? 'button button1' : 'button22 button2'} onClick={onAppClick}>
            <img alt="appicon" src={navbar ? appicon : appicon2} className='icon' />
            Оставить Заявку
          </button>
        </nav>
        <Carousel interval={2000} controls={false} style={{ marginTop:"-10%" ,width: '100%'}}>
            <Carousel.Item style={{  width: '100%' }}>
              <div class='color-overlay'>
              </div>
              <img
                style={{ width: '100%' }}
                src={slide1}
                alt="First slide"
              />
              <Carousel.Caption className="caption">
                <div style={{ height:'100%'}}>
                  <p className="slideshow-text">
                    Наша компания занимается доставкой запчастей для башенных, гусеничных и
                    автомобильных кранов из Китая. Мы имеем опыт работы с кранами более 15-ти лет и
                    поможем Вам подобрать запчасти для Вашей техники. Оставьте заявку на вкладке сверху
          и наш менеджер обязательно свяжется с Вами в ближайшее время.</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ width: '100%' }}>
              <div class='color-overlay'>
              </div>
              <img
                style={{ width: '100%' }}
                src={slide2}
                alt="Second slide"
              />
               <Carousel.Caption className="caption">
                <div style={{ height:'100%'}}>
                <p className="slideshow-text">
                    Наша компания занимается доставкой запчастей для башенных, гусеничных и
                    автомобильных кранов из Китая. Мы имеем опыт работы с кранами более 15-ти лет и
                    поможем Вам подобрать запчасти для Вашей техники. Оставьте заявку на вкладке сверху
          и наш менеджер обязательно свяжется с Вами в ближайшее время.</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{width: '100%' }}>
              <div class='color-overlay'>
              </div>
              <img
                style={{ width: '100%' }}
                src={slide3}
                alt="Third slide"
              />
                <Carousel.Caption className="caption">
                <div style={{ height:'100%'}}>
                <p className="slideshow-text">
                    Наша компания занимается доставкой запчастей для башенных, гусеничных и
                    автомобильных кранов из Китая. Мы имеем опыт работы с кранами более 15-ти лет и
                    поможем Вам подобрать запчасти для Вашей техники. Оставьте заявку на вкладке сверху
          и наш менеджер обязательно свяжется с Вами в ближайшее время.</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <h1 className="categories-head">Категории</h1>
          <div className="categories">
          <div className='div1'>
      
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              className="box1">
              <h1 className="categories-title">Подшипники</h1>
              <img alt="podshipnik" src={podshipnik} className="categories-image1" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              className="box1">
              <h1 className="categories-title">Двигатели</h1>
              <img alt="dvigatel" src={dvigatel} className="categories-image1" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              className="box1">
              <h1 className="categories-title">Кабины</h1>
              <img alt="kabina" src={kabina} className="categories-image1" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              className="box1">
              <h1 className="categories-title">Тормозные накладки</h1>
              <img alt="tormoz" src={tormoz} className="categories-image1" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              className="box1">
              <h1 className="categories-title">Поворотное устройство</h1>
              <img alt="povorot" src={povorot} className="categories-image1" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              className="box1">
              <h1 className="categories-title">Приборы безопасности</h1>
              <img alt="pribor" src={pribor} className="categories-image" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              className="box1">
              <h1 className="categories-title">Редуктора</h1>
              <img alt="engine" src={engine} className="categories-image1" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              className="box1">
              <h1 className="categories-title">Секция БК</h1>
              <img alt="kokos" src={kokos} className="categories-image1" />
            </motion.div>

          </div>
        </div>
      </body>
    </html>
  );
}
export default Lala;