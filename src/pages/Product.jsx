import React from 'react'
import styled from 'styled-components';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Newsletter from '../components/Newsletter';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;`;

const ImgContainer = styled.div`
    max-height: 70vh;
    max-width: 40%;
    marign-right: 50px;
`;

const InfoContainer = styled.div``;

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

const Title = styled.h1`
    font-size: 40px;
    font-weight: 300;`
;

const Desc = styled.p``;

const Price = styled.div``;

const Product = () => {
  return (
   <Container> 
       <Navbar />
       <Wrapper>
           <ImgContainer>
             <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
           </ImgContainer>
           <InfoContainer>
               <Title>Denim Jumpsuit</Title>
               <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero consectetur ipsum quibusdam provident aliquid maxime eos beatae quae sunt mollitia.</Desc>
               <Price>$ 20</Price>
           </InfoContainer>
       </Wrapper>
       <Newsletter />
       <Footer />
   </Container>
  )
}

export default Product;
