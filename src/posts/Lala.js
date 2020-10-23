import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Layout, Typography, Input, message } from "antd";
import { useFirebase } from "../firebase/useFirebase";
//import { navigate } from "@reach/router";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Spring } from 'react-spring/renderprops';
//import { useSpring } from 'react-spring'
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
import kokos from '../assets/kokos.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';
import './styles.css';


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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className='body'>
        <nav className={navbar ? 'navbar active' : 'navbar'}>
          <div className='header'>
            <div className='container'>
              <img alt="logo" src={navbar ? logo : logo1} className='img' />
              <h1 className={navbar ? 'h1' : 'h2'}>SAPIENCE CRANES</h1>
              <button className={navbar ? 'button button1' : 'button22 button2'}>
                <img alt="appicon" src={navbar ? appicon : appicon2} className='icon' />
                Оставить Заявку
              </button>
            </div>
          </div>
        </nav>
        <div className='slideshow'>
          <Carousel interval={2000} style={{ width: '100%' }}>
            <Carousel.Item style={{ height: 1000, width: '100%' }}>
              <div class='color-overlay'>
              </div>
              <img
                style={{ width: '100%' }}
                src={slide1}
                alt="First slide"
              />
              <Carousel.Caption>
                <div style={{ marginTop: '-44%', marginLeft: 150 }}>
                  <p style={{ fontSize: 30, width: 1000, textAlign: 'center', fontFamily: 'nashadostavka' }}>
                    Наша компания занимается доставкой запчастей для башенных, гусеничных и
                    автомобильных кранов из Китая. Мы имеем опыт работы с кранами более 15-ти лет и
                    поможем Вам подобрать запчасти для Вашей техники. Оставьте заявку на вкладке сверху
          и наш менеджер обязательно свяжется с Вами в ближайшее время.</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: 1000, width: '100%' }}>
              <div class='color-overlay'>
              </div>
              <img
                style={{ width: '100%' }}
                src={slide2}
                alt="Second slide"
              />
              <Carousel.Caption>
                <div style={{ marginTop: '-44%', marginLeft: 150 }}>
                  <p style={{ fontSize: 30, width: 1000, textAlign: 'center', fontFamily: 'nashadostavka' }}>
                    Наша компания занимается доставкой запчастей для башенных, гусеничных и
                    автомобильных кранов из Китая. Мы имеем опыт работы с кранами более 15-ти лет и
                    поможем Вам подобрать запчасти для Вашей техники. Оставьте заявку на вкладке сверху
          и наш менеджер обязательно свяжется с Вами в ближайшее время.</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: 1000, width: '100%' }}>
              <div class='color-overlay'>
              </div>
              <img
                style={{ width: '100%' }}
                src={slide3}
                alt="Third slide"
              />
              <Carousel.Caption>
                <div style={{ marginTop: '-44%', marginLeft: 150 }}>
                  <p style={{ fontSize: 30, width: 1000, textAlign: 'center', fontFamily: 'nashadostavka' }}>
                    Наша компания занимается доставкой запчастей для башенных, гусеничных и
                    автомобильных кранов из Китая. Мы имеем опыт работы с кранами более 15-ти лет и
                    поможем Вам подобрать запчасти для Вашей техники. Оставьте заявку на вкладке сверху
          и наш менеджер обязательно свяжется с Вами в ближайшее время.</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="categories">
          <div className='div1'>
            <motion.div 
            whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 1.1 }}
              data-aos="fade-right"
               className="box1">
              <h1 className="categories-title"></h1>
              <h1 className="categories-title">Подшипники</h1>

              <img alt="podshipnik" src={podshipnik} className="categories-image1" />
            </motion.div>
            <motion.div  
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 1.1 }} 
            data-aos="fade-down" 
            className="box1">
              <h1 className="categories-title"></h1>
              <h1 className="categories-title">Двигатели</h1>

              <img alt="dvigatel" src={dvigatel} className="categories-image1" />
            </motion.div>
            <motion.div 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 1.1 }}
             data-aos="fade-down"
              className="box1">
              <h1 className="categories-title"></h1>
              <h1 className="categories-title">Кабины</h1>

              <img alt="kabina" src={kabina} className="categories-image1" />
            </motion.div>
            <motion.div 
            whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 1.1 }} 
             data-aos="fade-left"
              className="box1">
              <h1 className="categories-title"></h1>
              <h1 className="categories-title">Тормозные накладки</h1>

              <img alt="tormoz" src={tormoz} className="categories-image1" />
            </motion.div>
            <motion.div 
             whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }} 
            data-aos="fade-right"
             className="box1">
              <h1 className="categories-title"></h1>
              <h1 className="categories-title">Поворотное устройство</h1>

              <img alt="povorot" src={povorot} className="categories-image1" />
            </motion.div>
            <motion.div
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 1.1 }} 
            data-aos="fade-up" 
            className="box1">
              <h1 className="categories-title"></h1>
              <h1 className="categories-title">Приборы безопасности</h1>

              <img alt="pribor" src={pribor} className="categories-image" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              data-aos="fade-up"
              className="box1">
              <h1 className="categories-title"></h1>
              <h1 className="categories-title">Редуктора</h1>

              <img alt="engine" src={engine} className="categories-image1" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              data-aos="fade-left"
              className="box1">
              <h1 className="categories-title"></h1>
              <h1 className="categories-title">Хуй подзаборный</h1>

              <img alt="kokos" src={kokos} className="categories-image1" />
            </motion.div>
          </div>
        </div>
      </body>
    </html>
  );
}
export default Lala;