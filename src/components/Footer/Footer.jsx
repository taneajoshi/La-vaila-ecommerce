import React from 'react';
import styled from 'styled-components';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Left = styled.div``;
const Center = styled.div``;
const Right = styled.div``;
const PhoneNumber = styled.div``;
const Email = styled.div``;

const Footer = () => {
  return (
    <footer className='flex-center'>
      <Left className="flex-1">
        <div className="footer-logo">Zudit</div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ex et eveniet similique porro temporibus quo dolorum minima veniam! Veniam?</p>
        <div className="social-links">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <PinterestIcon />
        </div>
      </Left>
      <Center className="flex-1">
        <h3>Useful Links</h3>
        <ul className="col-count-2">
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
      <Right className="flex-1">
        <h3>Contact</h3>
        <address><LocationOnOutlinedIcon/>D22 Dixie path, Newsberg</address>
        <PhoneNumber><LocalPhoneOutlinedIcon/> <a href="tel:12 243-23-234">+12 243-23-234</a></PhoneNumber>
        <Email><MarkEmailUnreadOutlinedIcon /><a href="mailto:abc@gmail.com">abc@gmail.com</a></Email>
      </Right>
    </footer>
  )
}

export default Footer

