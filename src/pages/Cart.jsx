import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Announcement from '../components/Announcement/Announcement';
import Footer from '../components/Footer/Footer';
import styled from 'styled-components';
import { Add, Remove } from '@mui/icons-material';

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 20px;
`;
const Title = styled.h1`
    font-weight: 400;
    font-size: 50px;
`;
const TopSection = styled.div`
    padding: 20px;
`;
const BottomSection = styled.div``;

const TopButton = styled.button`
    padding: 12px 20px;
    font-weight: 600;
    text-transform: uppercase;
    border: ${props => props.type === "filled" && "none"};
    color: ${props => props.type === "filled" ? "#ffffff" : "#000000"};
    background-color: ${props => props.type === "filled" ? "#000000" : "transparent"};

    &:hover {
        opacity: 0.85;
    }
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  position: sticky;
  top: 40px;
`;

const SummaryTitle = styled.h1`
  font-weight: 400;
  font-size: 30px !important;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;


const Cart = () => {
return (
<Container>
    <Navbar />
    <Announcement />
    <Wrapper>
        <Title className='text-center'>YOUR BAG</Title>
        <TopSection className='flex-center justify-between'>
            <TopButton>continue shopping</TopButton>
            <div>
                <span className='link-underline'>Shopping Bag(2)</span>
                <span className='link-underline'>Wishlist (0)</span>
            </div>
            <TopButton type="filled">checkout</TopButton>
        </TopSection>
        <BottomSection className='flex-center justify-between'>
            <Info>
                <Product>
                    <ProductDetail>
                        <Image src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80" />
                        <Details>
                            <ProductName>
                                <b>Product:</b> HAKURA T-SHIRT
                            </ProductName>
                            <ProductId>
                                <b>ID:</b> 949239423
                            </ProductId>
                            <ProductColor color="grey" />
                            <ProductSize>
                                <b>Size:</b> XL
                            </ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add />
                            <ProductAmount>2</ProductAmount>
                            <Remove />
                        </ProductAmountContainer>
                        <ProductPrice>
                            $30
                        </ProductPrice>
                    </PriceDetail>
                </Product>
                <Hr />
                <Product>
                    <ProductDetail>
                        <Image src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80" />
                        <Details>
                            <ProductName>
                                <b>Product:</b> HAKURA T-SHIRT
                            </ProductName>
                            <ProductId>
                                <b>ID:</b> 949239423
                            </ProductId>
                            <ProductColor color="grey" />
                            <ProductSize>
                                <b>Size:</b> XL
                            </ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add />
                            <ProductAmount>2</ProductAmount>
                            <Remove />
                        </ProductAmountContainer>
                        <ProductPrice>
                            $30
                        </ProductPrice>
                    </PriceDetail>
                </Product>
                <Hr />
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$ 50</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>$ 50</SummaryItemPrice>
                </SummaryItem>
                <Button>CHECKOUT</Button>
            </Summary>
        </BottomSection>
    </Wrapper>
    <Footer />
</Container>
)
}

export default Cart;
