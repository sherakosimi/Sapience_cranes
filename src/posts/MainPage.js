import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Layout, Typography, Input, message } from "antd";
import { useFirebase } from "../firebase/useFirebase";
//import { navigate } from "@reach/router";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Spring } from 'react-spring/renderprops';
//import { useSpring } from 'react-spring'
///import { motion } from "framer-motion";
import slide1 from '../assets/slidephoto12.JPG'
import slide2 from '../assets/slidephoto22.JPG'
import slide3 from '../assets/slidephoto32.JPG'
import logo from '../assets/3333.jpg'
import './styles.css';

//const { Search } = Input;

const { Header, Footer, Content } = Layout;

const { Title } = Typography;


const MainLayout1 = styled(Layout)`
  width: 100vw;
  height: 100vh;
  ;
`


function MainPage() {
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
    <>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>
      <div style={{ backgroundColor: '#A6A6A6', width: '100%', height: 2000 }}>
        <nav className={navbar ? 'navbar active' : 'navbar'}>
          <div style={{ width: '100%', height: 90, backgroundColor: 'transparent', marginTop: '-1%', display: 'flex',flexWrap: 'nowrap' }}>
            <Title style={navbar ? { fontSize: 70, color: 'black', marginLeft: 33, fontFamily: 'NeutonBold' } :{ fontSize: 70, color: 'white', marginLeft: 33, fontFamily: 'NeutonBold', color: "white", textShadow:{height:2,width:2} }}>SapienceCranes</Title>
            <div style={{ width:150, marginLeft:'64%', marginTop:'1.2%' }}>
              <Button
                style={navbar ? { borderColor: 'black', backgroundColor: "transparent", height: 55, width: '100%', borderRadius: '10px', borderWidth:3 }:{ borderColor: 'white', backgroundColor: "transparent", height: 55, width: 150, borderRadius: '10px', borderWidth:3 }}>
                <Title style={ navbar ? { fontSize: 14, fontFamily: 'nashadostavka', paddingTop: 5, color:'black',marginLeft:'-8%' }: { fontSize: 14, fontFamily: 'nashadostavka', paddingTop: 5, marginLeft: '-8%', color:'white' }}>Оставить Заявку</Title>
              </Button>
            </div>
          </div>

        </nav>

        <div style={{ width: '100%', marginTop: -80 }}>
          <Carousel interval={2000} style ={{ width:'100%'}}>
            <Carousel.Item style={{ height: 1000, width:'100%' }}>
            <div class='color-overlay'>
                </div>
              <img
                style={{ width: '100%' }}
                src={slide1}
                alt="First slide"
              />
              <Carousel.Caption>
                <div style = {{marginTop:'-44%', marginLeft:150}}>
                <p style={{fontSize: 30, width: 1000, textAlign: 'center', fontFamily:'nashadostavka' }}>
          Наша компания занимается доставкой запчастей для башенных, гусеничных и
          автомобильных кранов из Китая. Мы имеем опыт работы с кранами более 15-ти лет и
          поможем Вам подобрать запчасти для Вашей техники. Оставьте заявку на вкладке сверху
          и наш менеджер обязательно свяжется с Вами в ближайшее время.</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: 1000 ,width:'100%'}}>
            <div class='color-overlay'>
                </div>
              <img
                style={{ width: '100%' }}
                src={slide2}
                alt="Second slide"
              />
              <Carousel.Caption>
              <div style = {{marginTop:'-44%', marginLeft:150}}>
                <p style={{fontSize: 30, width: 1000, textAlign: 'center', fontFamily:'nashadostavka' }}>
          Наша компания занимается доставкой запчастей для башенных, гусеничных и
          автомобильных кранов из Китая. Мы имеем опыт работы с кранами более 15-ти лет и
          поможем Вам подобрать запчасти для Вашей техники. Оставьте заявку на вкладке сверху
          и наш менеджер обязательно свяжется с Вами в ближайшее время.</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: 1000, width:'100%' }}>
            <div class='color-overlay'>
                </div>
              <img
                style={{ width: '100%' }}
                src={slide3}
                alt="Third slide"
              />
              <Carousel.Caption>
              <div style = {{marginTop:'-44%', marginLeft:150}}>
                <p style={{fontSize: 30, width: 1000, textAlign: 'center', fontFamily:'nashadostavka' }}>
          Наша компания занимается доставкой запчастей для башенных, гусеничных и
          автомобильных кранов из Китая. Мы имеем опыт работы с кранами более 15-ти лет и
          поможем Вам подобрать запчасти для Вашей техники. Оставьте заявку на вкладке сверху
          и наш менеджер обязательно свяжется с Вами в ближайшее время.</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
</html>
    </>
  );



}

export default MainPage;
