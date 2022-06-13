import React from 'react';
import styled from 'styled-components';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import './Footer.scss';

const Left = styled.div`
  p {
    max-width: 75%;
  }
`;
const Center = styled.div`
  h3 {
    margin-bottom: 15px;
  }
  ul {
    padding: 0;
    list-style: none;
    column-gap: 98px;

    li {
      text-transform: capitalize;
      cursor: pointer;
      margin: 5px 0;

      &:hover {
        text-decoration: underline;
        text-underline-offset: 1px;
        color: teal;
      }
    }
  }  
`;

const PhoneNumber = styled.div``;
const Email = styled.div``;

const Right = styled.div`
  svg {
    color: #008080;
    font-size: 20px;
    margin-right: 8px;
  }

  h3 {
    margin-bottom: 15px;
  }

  address,
  ${PhoneNumber}, 
  ${Email} {
    margin-bottom: 10px;
  }
`;


const Footer = () => {
  return (
    <footer className='justify-center'>
      <Left className="col-center flex-1">
        <div className="footer-logo">Zudit</div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ex et eveniet similique porro temporibus quo dolorum minima veniam! Veniam?</p>
        <div className="social-links">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <PinterestIcon />
        </div>
      </Left>
      <Center className="col-center flex-1">
        <h3>Useful Links</h3>
        <ul className="col-count-3">
          <li>Home</li>
          <li>man fashion</li> 
          <li>accessories</li>
          <li>order tracking</li>
          <li>wishlist</li>
          <li>cart</li>
          <li>woman fashion</li>
          <li>my account</li>
          <li>wishlist</li>
          <li>terms</li>
        </ul>
      </Center>
      <Right className="col-center flex-1">
        <h3>Contact</h3>
        <address className="align-center"><LocationOnOutlinedIcon/>D22 Dixie path, Newsberg</address>
        <PhoneNumber className="align-center"><LocalPhoneOutlinedIcon/> <a href="tel:12 243-23-234">+12 243-23-234</a></PhoneNumber>
        <Email className="align-center"><MarkEmailUnreadOutlinedIcon /><a href="mailto:abc@gmail.com">abc@gmail.com</a></Email>
      </Right>
    </footer>
  )
}

export default Footer

