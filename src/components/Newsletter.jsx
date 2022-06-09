import React from 'react';
import styled from 'styled-components';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Container = styled.section`
    padding: 60px 15px;
    background: rgb(248 93 36 / 14%);
`;

const Title = styled.h2`
    font-size: 60px;    
`;
const Desc = styled.p`
    font-size: 24px;
`;

const Form = styled.form`
    display: flex;
    max-width: 50%;
    margin: 26px auto 0;

    input[type="email"] {
        width: 100%;
        min-height: 40px;
        border-radius: 3px;
        border: none;
        padding-left: 10px;
        font-size: 16px;
        margin-right: 5px;
    }
`;

const Button = styled.button`
    background: teal;
    color: #ffffff;
    border: none;
    min-width: 50px;
    border-radius: 3px;
`;

const Icon = styled.div``;

const Newsletter = () => {
  return (
    <Container className='text-center '>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favourite products</Desc>
        <Form>
            <input type="email" placeholder='enter your email' />
            <Button>
                <Icon>
                    <SendOutlinedIcon />
                </Icon>
            </Button>
        </Form>

    </Container>
  )
}

export default Newsletter;
