import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@mui/icons-material";
import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: black;
  color: white;
  justify-content: center;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;


const ContactItem = styled.div`
display: flex;
margin-bottom: 10px;
`

const Logo = styled.h1`
  color: #ff7300;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
`;
const Payment = styled.img`
width: 50%;
`


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>BACKDROP.</Logo>

        <Desc>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
          possimus dignissimos eos itaque molestiae eius debitis mollitia ab
          tempora, veniam nesciunt quia ex eveniet temporibus reiciendis
          veritatis enim laboriosam recusandae.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>

        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>ManFashion </ListItem>
          <ListItem>WomenFashion </ListItem>
          <ListItem>Accessories </ListItem>
          <ListItem>MyAccount </ListItem>
          <ListItem>OrderTracking </ListItem>
          <ListItem>Terms & Conditions </ListItem>
          <ListItem>Whishlist </ListItem>
          <ListItem>Coupons </ListItem>
        </List>
      </Center>
          <Right>
              <Title>Contact Us</Title>
              <ContactItem>
                  <Room style={{marginRight:"10px"}}/> sample address
              </ContactItem>

              <ContactItem>
                  <Phone style={{marginRight:"10px"}}/>+91 1234567890
              </ContactItem>
              <ContactItem>
                  <MailOutline style={{marginRight:"10px"}}/>Contact@backdrop.com
              </ContactItem>
        <Payment src="https://forum.opencart.com/download/file.php?id=28877" />
      </Right>
    </Container>
  );
};

export default Footer;
