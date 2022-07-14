import { Add, Remove } from '@mui/icons-material';
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

const InfoContainer = styled.div`
    padding: 0 50px;
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

const Title = styled.h1`
    font-size: 60px;
    font-weight: 500;`;

const Desc = styled.p`
    font-size: 22px;
`;

const Price = styled.div`
    font-size: 40px;
    font-weight: 100;
    margin-top: 30px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0;
`;
const Filter = styled.div``;

const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;`;

const FilterColor = styled.div`
   height: 20px;
   width: 20px;
   border-radius: 50%;
   background-color: ${props => props.color};
   margin: 0 6px;
   cursor: pointer;
`;

const FilterSize = styled.select`
    width: 80px;
    min-height: 40px;
    margin-left: 12px;`;

const FilterSizeOption = styled.option``;

const AddWrapper = styled.div`
    max-width: 50%;
    justify-content: space-between;
`;

const AmountWrapper = styled.div`
    min-width: 100px;
    font-weight: 700;
`;

const Amount = styled.span`
    height: 28px;
    width: 28px;
    border: 2px solid #000000;
    border-radius: 4px;
`;

const Button = styled.button``;

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
               <FilterContainer className="justify-between">
                   <Filter className='align-center'>
                       <FilterTitle>Color</FilterTitle>
                        <FilterColor color="#000000"></FilterColor>
                        <FilterColor color="darkblue"></FilterColor>
                        <FilterColor color="#808080"></FilterColor>
                   </Filter>
                   <Filter className="align-center">
                       <FilterTitle>Size</FilterTitle>
                       <FilterSize>
                           <FilterSizeOption>XS</FilterSizeOption>
                           <FilterSizeOption>S</FilterSizeOption>
                           <FilterSizeOption>M</FilterSizeOption>
                           <FilterSizeOption>L</FilterSizeOption>
                           <FilterSizeOption>XL</FilterSizeOption>
                       </FilterSize>
                   </Filter>
               </FilterContainer>
               <AddWrapper className="align-center">
                   <AmountWrapper className="align-center justify-between">
                       <Remove className="cursor-pointer"/>
                       <Amount className='flex-center'>1</Amount>
                       <Add className="cursor-pointer"/>
                   </AmountWrapper>
                   <Button className="global-btn">ADD TO CART</Button>
               </AddWrapper>
           </InfoContainer>
       </Wrapper>
       <Newsletter />
       <Footer />
   </Container>
  )
}

export default Product;
