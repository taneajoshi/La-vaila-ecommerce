import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const CategoryWrapper = styled.div`
    width: 33.333%;
    max-width: 100%;
    max-height: 60vh;
    margin: 0 15px;
`;

const Image = styled.img`
`;

const Info = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
`;

const Title = styled.h2`
`;


const CategoryItem = ({item}) => {
  return (
   <CategoryWrapper className='overlay text-center'>
     <Link to={`/products/${item.category}`}>
       <Image src={item.img} />
        <Info>
            <Title className='text-white'> {item.title}</Title>
            <button className="global-btn">shop now</button>
        </Info> 
    </Link>
   </CategoryWrapper>
  )
}

export default CategoryItem;
