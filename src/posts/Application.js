import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Layout, Typography, Input, message, Form, Space, Upload, Select, InputNumber } from "antd";
import { useFirebase } from "../firebase/useFirebase";
import { navigate } from "@reach/router";
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
import { UploadOutlined } from '@ant-design/icons';
import emailjs from "emailjs-com";
import Aos from 'aos';
import 'aos/dist/aos.css';
import './styles.css';


function onAppClick() {
  navigate("/application")
}

function Application() {

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


  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('gmail', 'application_template', e.target, 'user_Ra8roTJE5NBAXZq7eRSsY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text)
      });
    message.success("Заявка Отправлена")
  }




  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className='body1'>
        <nav className={navbar ? 'navbar active' : 'navbar'}>
          <img alt="logo" src={navbar ? logo : logo1} className='img' />
                <h1 className={navbar ? 'h1' : 'h1 h2'}>SAPIENCE CRANES</h1>
                <button className={navbar ? 'button button1' : 'button22 button2'} onClick={onAppClick}>
                 <img alt="appicon" src={navbar ? appicon : appicon2} className='icon' />
                     Оставить Заявку
                  </button>
        </nav>
        <div className="background-photo" >
          <div className="container">
          <form id="contact" action="" method="post" onSubmit={sendEmail}>
            <h3>Заполните заявку</h3>
            <h4>И мы свяжемся с Вами в ближайшее время</h4>
            <div className="fieldset">
              <input name="name" placeholder="ФИО" type="text" tabindex="1" required autofocus />
            </div>
            <div className="fieldset">
              <input name="brand"  placeholder="Название Компании" type="text" tabindex="4" required />
            </div>
            <div className="fieldset">
              <input name="email"  placeholder="E-mail" type="email" tabindex="2" required />
            </div>
            <div className="fieldset">
              <input name="phone"  placeholder="Ваш телефон" type="tel" tabindex="3" required />
            </div>
            <div className="fieldset">
              <textarea name="description"  placeholder="Опишите подробно Ваш вопрос..." tabindex="5" required></textarea>
            </div>
            <div className="fieldset">
              <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Отправить Заявку</button>
            </div>
            <div className="fieldset">
              <button name="submit" type="cancel" id="contact-submit" data-submit="...Sending">Отменить</button>
            </div>
          </form>
          </div>        
        </div>
      </body>
    </html>
  );
}
export default Application;