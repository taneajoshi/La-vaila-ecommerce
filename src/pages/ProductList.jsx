import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products/Products';

const FilterContainer = styled.div``;

const Filter = styled.div``;

const FilterText = styled.h3`
    margin-right: 10px;
`;

const Select = styled.select`
    margin-right: 10px;
    padding: 10px 5px;
    min-width: 100px;
    border: 1px solid #d3d3d3;
    color: #444141;`;

const Option = styled.option``;

const Container = styled.div``;

const Title = styled.h1`
    margin-bottom: 20px`;

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filter, setFilters]  = useState({});

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
        ...filter,
        [e.target.name]: value
    });
  }

  console.log(filter);
  return (
    <Container className='global-container text-center'>
        <Navbar/>
        <Title>Dresses</Title>
            <FilterContainer className='justify-between'>
                <Filter className='align-center'>
                    <FilterText>Filter Products</FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Option disabled>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option disabled>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter className='align-center'>
                    <FilterText>Sort Products</FilterText>
                    <Select>
                        <Option>Newest</Option>
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
