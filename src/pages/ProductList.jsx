import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products/Products';

const Container = styled.div``;

const Title = styled.h1`
    margin-bottom: 20px`;

const FilterContainer = styled.div``;

const Filter = styled.div`
    margin-bottom: 20px;
    display: flex;
`;

const FilterText = styled.h3`
    margin-right: 10px;
`;


const Select = styled.select`
margin-right: 10px`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container className='global-container text-center'>
        <Navbar/>
        <Title>Dresses</Title>
        <FilterContainer className='justify-between'>
            <Filter>
                <FilterText>Filter Products</FilterText>
                <Select>
                    <Option disabled selected>Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Low to High</Option>
                    <Option>High to Low</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList
