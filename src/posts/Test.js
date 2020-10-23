import React, { useState, useEffect } from "react";

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
import logo from '../assets/newlogo.png'
import logo1 from '../assets/newlogowhite.png'
import appicon from '../assets/application.png'
import appicon2 from '../assets/applicationwhite.png'
import './styles.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
const { Title } = Typography;


function Test() {

useEffect(()=>{
  Aos.init({duration:500});
},[]);

  return (
    <div className="App">
      <h1>Pricing</h1>
      <div>
      <div data-aos="fade-right" className ="boxes">1</div>
      <div data-aos="fade-right" className ="boxes">2</div>
      <div data-aos="fade-right" className ="boxes">3</div>
      <div data-aos="fade-right" className ="boxes">4</div>
      <div data-aos="fade-right" className ="boxes">1</div>
      <div data-aos="fade-right" className ="boxes">2</div>
      <div data-aos="fade-right" className ="boxes">3</div>
      <div data-aos="fade-right" className ="boxes">4</div>
      <div data-aos="fade-right" className ="boxes">1</div>
      <div data-aos="fade-right" className ="boxes">2</div>
      <div data-aos="fade-right" className ="boxes">3</div>
      <div data-aos="fade-right" className ="boxes">4</div>
      </div>
    </div>

  );
}
export default Test;