import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
`;

const Image = styled.img`
`;

const Info = styled.div`
`;

const Title = styled.h2`
`;


const CategoryItem = ({item}) => {
  return (
   <Container>
       <Image src={item.img} />
        <Info>
            <Title> {item.title}</Title>
            <button className="global-btn">shop now</button>
        </Info> 
   </Container>
  )
}

export default CategoryItem
