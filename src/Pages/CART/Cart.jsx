import React from "react";
import Announcement from "../../Components/Announcement/Announcement";
import Navbar from "../../Components/Navbar/Navbar";
import { styled } from "styled-components";
import Footer from "../../Components/Footer";
import { Add, Remove } from "@mui/icons-material";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  margin: 0px 10px;
  cursor: pointer;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;
const Summary = styled.div`
  flex: 1;
`;

const Product = styled.div`
display: flex;
justify-content: space-between;
`;
const ProductDetail = styled.div`
flex: 2;
display: flex;
`;
const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


`
const Image = styled.img`
width: 70%;

`
const Details = styled.div`
padding: 20px;
display: flex;
justify-content: space-around;
flex-direction: column;
`
const ProductName=styled.span``
const ProductID=styled.span``
const ProductSize = styled.span`


`
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
`

const PriceDetailsContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;

`
const Hr = styled.hr`
background-color: #eee;
border: none;
height: 2px;
`
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
`

const ProductPrice = styled.div`
font-size: 30px;
font-weight:200;
 `

const SummaryTitle=styled.h1``
const SummaryItem=styled.div``
const SummaryItemText = styled.div``
const SummaryItemPrice=styled.div``


const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />

      <Wrapper>
        <Title>YOUR BAG</Title>

        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>

          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>

            <TopText> WHISHLIST(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://rukminim2.flixcart.com/image/832/832/ku8pbbk0/shoe/i/c/b/6-386922-puma-rhubarb-black-original-imag7et2sg94yjry.jpeg?q=70" />
                <Details>
                  <ProductName><b>Product:</b>Bruton Trendy shoe</ProductName>
                  <ProductID><b>Id:</b>1234567890</ProductID>
                  <ProductColor color="red"/>
                  <ProductSize><b>Size:</b>37.5</ProductSize>
                </Details>

              </ProductDetail>
              <PriceDetail>
                <PriceDetailsContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove/>
                </PriceDetailsContainer>
                <ProductPrice>$20</ProductPrice>
              </PriceDetail>
              
            </Product>
            <Hr/>
            <Product>
              <ProductDetail>
                <Image src="https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/v/i/9/-original-imaghag8t7fvszj2.jpeg?q=70 " />
                <Details>
                  <ProductName><b>Product:</b>Bruton Trendy shoe</ProductName>
                  <ProductID><b>Id:</b>1234567890</ProductID>
                  <ProductColor color="grey"/>
                  <ProductSize><b>Size:</b>37.5</ProductSize>
                </Details>

              </ProductDetail>
              <PriceDetail>
                <PriceDetailsContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove/>
                </PriceDetailsContainer>
                <ProductPrice>$20</ProductPrice>
              </PriceDetail>
              
            </Product>
          </Info>
          <Summary>
<SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 60</SummaryItemPrice>
</SummaryItem>

          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
