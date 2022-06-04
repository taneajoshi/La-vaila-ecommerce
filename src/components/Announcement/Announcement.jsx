import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    min-height: 40px;
    background-color: $teal;
    color: #ffffff;
    font-weight: 500;
`;

const Announcement = () => {
  return (
   <Container className='flex-center font-14'>
        Super Dead! Get &nbsp; <strong> 50 - 80% off </strong> &nbsp; on all major brands.
   </Container>
  )
}

export default Announcement
