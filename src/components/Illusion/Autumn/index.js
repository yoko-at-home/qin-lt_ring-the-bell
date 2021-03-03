// https://github.com/VitaliiZhukov/react-scroll-slider/blob/master/stories/Basic/Basic/Components/Autumn/index.js
import React from 'react';
import styled from 'styled-components';

import { ActiveItem } from 'react-scroll-slider';

import Content from '../Content';
import imageUrl from '../../../assets/autumn.jpg';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: rgba(125, 125, 0, 0.1);
  border-radius: 10px;
  color: white;
  margin: 0 auto;
  font-size: 3rem;
  text-shadow: 0px 0px 15px wheat;
`;

const Image = styled.div`
  width: 500px;
  height: 100%;
  border-radius: 5px;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.3);
  background-image: url(${imageUrl});
  background-size: cover;
  background-position: center;
`;

const forwardStyleImage = { transform: 'translateX(-100%)', opacity: 0 };
const backwardStyleImage = { transform: 'translateX(100%)', opacity: 0 };

const forwardStyleContent = { transform: 'scale(.5)', opacity: 0 };
const backwardStyleContent = { transform: 'scale(2)', opacity: 0 };

const WithImage = () => (
  <Wrapper>
    <ActiveItem
      forwardStyle={forwardStyleContent}
      backwardStyle={backwardStyleContent}
    >
      <Content style={{ fontFamily: 'cursive' }} title={'Autumn'} />
    </ActiveItem>

    <ActiveItem
      forwardStyle={forwardStyleImage}
      backwardStyle={backwardStyleImage}
    >
      <Image />
    </ActiveItem>
  </Wrapper>
);

export default WithImage;
