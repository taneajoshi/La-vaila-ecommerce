import React, { useState } from 'react';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import styled from 'styled-components';
import './Slider.scss';
import SliderItems from '../../data';

const Arrow = styled.div`
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: #fff7f7;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.65;
    z-index: 9;
`;

const Image = styled.img`
    width: 100%;
    object-fit: cover;
    object-position: center right;
    height: 100%;
    position: absolute;
    z-index: -1;
    top: 0;
    object-position: top;
`;

const Title = styled.h1``;
const Desc = styled.p`
    letter-spacing: 1.5px;
`;

const SliderCTA = styled.button`
    margin-top: 25px;
    appearance: none;
    border: 1px solid #ffffff;
    color: #ffffff;
    background: transparent;
    padding: 10px 15px;
    border-radius: 50px;
    transition: transform 0.3s linear;

    &:hover {
        background: #ffffff;
        color: $teal;
    }
`;

const Wrapper = styled.div`
`;

const Slide = styled.div`
    transform: translateX(${props => props.slideIndex * -100}%);
    transition: all 1.5s ease;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
      if(direction === "left") {
          setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2 )
      } else {
          setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
      }
  };

  return (
    <div className='slider-container d-flex'>
        {/* previous arrow */}
        <Arrow direction="left" className="border-50 flex-center" onClick = {() => handleClick('left')}>
            <ArrowBackIosRoundedIcon />
        </Arrow>
        {/* slider wrapper */}
        <Wrapper className="slider-wrapper d-flex">
            {SliderItems.map((item) => (
                <Slide slideIndex={slideIndex} className='slide'>
                <div className='img-container'>
                    <Image src={item.img}/>
                </div>
                <div className='info-container flex-center text-center'>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <SliderCTA>SHOW NOW</SliderCTA>
                </div>
                </Slide>
            ))}
        </Wrapper>
        {/* Next slide arrow */}
        <Arrow direction="right" className="border-50 flex-center" onClick = {() => handleClick('right')}>
            <ArrowForwardIosRoundedIcon />
        </Arrow>
    </div>
  )
}

export default Slider;
