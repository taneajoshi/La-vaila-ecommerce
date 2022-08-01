import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
`;

const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: #ffffff;
`;

const Form = styled.form`
`;

const Title = styled.h1`
  font-size: 26px;
  font-weight: 300;`
;

const Input = styled.input`
    width: 100%;
`;
 
const Button = styled.button`
    margin: 20px 10px 10px 0;
`;

const Link = styled.a`
    font-size: 16px;
    font-weight: 600;
    color: #0e3636;
    display: block;
    text-transform: uppercase;
    margin-top: 10px;
    text-decoration: underline;

    &:hover {
        opacity: 0.85;
    }
`;

const Login = () => {
  return (
    <Container className='flex-center login-container'>
      <Wrapper>
          <Title>Log In</Title>
          <Form> 
              <Input placeholder="username" />
              <Input placeholder="password" />
              <Button className='login-btn'>Login </Button>
              <Link>Forgot Password</Link>
              <Link>Create a new account</Link>
          </Form>
      </Wrapper>
    </Container>
  )
}

export default Login;
