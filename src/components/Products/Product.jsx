import React from 'react';
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Info = styled.div`
    position: absolute;
    opacity: 0;
    top: 50%;
    transform: translateY(-50%);
    color: #ffffff;
    display: flex;
    justify-content: center; 
    width: 100%;
    height: 100%;
    align-items: center;
    background: rgb(45 88 88 / 65%);
    transition: all 0.3s linear;
`;

const Container = styled.div`
    position: relative;
    margin: 8px;
    width: calc(25% - 16px);
    max-height: 45vh;
    cursor: pointer;

    &:hover ${Info} {
        opacity: 1;
    }
`;

const Circle = styled.div`
`;

const Icon = styled.div`
   svg {
    margin: 0 8px;
    font-size: 35px;
   }
`;

const Image = styled.img``;

const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlinedIcon />
                </Icon>
                <Icon>
                    <SearchOutlinedIcon />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlinedIcon />
                </Icon>
            </Info>
    </Container>
  )
}

export default Product;
