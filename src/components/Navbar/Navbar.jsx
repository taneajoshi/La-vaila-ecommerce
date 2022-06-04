import { Search } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    justify-content: space-between;
`;

Wrapper.displayName = "Wrapper";

const Language = styled.span`
    font-size: 14px;
    curson: pointer;
`;
const Left = styled.div`
    flex: 1;
`;

const Center = styled.div`
    flex: 1;
`;

const Right = styled.div`
    flex: 1;
    justify-content: flex-end;
`;

const Logo = styled.div`
    font-weight: bold;
    text-align: center;
    font-size: 26px;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    text-transform: uppercase;
    margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper className='align-center'>
            <Left className='align-center'>
                <Language>EN</Language>
                <SearchContainer>
                    <Input />
                    <Search style={{color: "gray", fontSize: "16px"}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>Zudit</Logo>
            </Center>
            <Right className='align-center'>
                <MenuItem>register</MenuItem>
                <MenuItem>sign in</MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlinedIcon />
                </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
