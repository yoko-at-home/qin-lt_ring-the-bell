// https://github.com/VitaliiZhukov/react-scroll-slider/blob/master/stories/Basic/Basic/index.js
import React from 'react';

import { Carousel } from 'react-scroll-slider';

import Spring from './Spring';
import Summer from './Summer';
import Autumn from './Autumn';
import Winter from './Winter';

const Slider = () => (
  <Carousel>
    <Spring />
    <Summer />
    <Autumn />
    <Winter />
  </Carousel>
);

export default Slider;
