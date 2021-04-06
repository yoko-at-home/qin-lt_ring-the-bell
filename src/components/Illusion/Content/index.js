// https://github.com/VitaliiZhukov/react-scroll-slider/blob/master/stories/Basic/Basic/Components/Content/index.js
import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  flex-basis: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px;
`;

const Content = ({ title, description, width, style }) => {
  return (
    <ContentWrapper width={width} style={style}>
      <h2>{title}</h2>
      <p style={{ fontFamily: 'cursive', fontSize: '2rem' }}>{description}</p>
    </ContentWrapper>
  );
};

Content.defaultProps = {
  description:
    'You can add up the parts. But you won’t have the sum. You can strike up the march. There is no drum. Every heart, every heart. To love will come. But like a refugee.',
  width: '33%',
  title: 'Slide title here',
};

export default Content;
