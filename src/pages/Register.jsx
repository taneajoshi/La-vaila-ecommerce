import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #ffffff;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 26px;
  font-weight: 300;`
;

const Input = styled.input`
  min-width: 40%;
`;

const Agreement = styled.span`
  font-size: 14px;
  margin: 20px 6px;
`;
 
const Button = styled.button`
`;

const Register = () => {
  return (
    <Container className='flex-center login-container'>
      <Wrapper>
          <Title>Create An Account</Title>
          <Form>
              <Input placeholder="first name" />
              <Input placeholder="last name" />
              <Input placeholder="username" />
              <Input placeholder="email" />
              <Input placeholder="password" />
              <Input placeholder="confirm password" />
              <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <strong>PRIVACY POLICY</strong></Agreement>
              <Button className='login-btn'>Sign Up</Button>
          </Form>
      </Wrapper>
    </Container>
  )
}

export default Register;
