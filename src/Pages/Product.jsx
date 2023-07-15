import Navbar from "../Components/Navbar/Navbar";
import { styled } from "styled-components";

import Announcement from "../Components/Announcement/Announcement";
import NewsLetter from "../NewsLetter";
import Footer from "../Components/Footer";
import { Add, Remove } from "@mui/icons-material";

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
  margin: 0px 50px;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const InfoContainer = styled.div`
  flex: 1;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.div`
  font-weight: 100;
  font-size: 40px;
`;

const Container = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;
const Filter = styled.div`
  display: flex;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterTitle = styled.span`
  font-style: 20px;
  font-weight: 200;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
 display: flex;
  justify-content: space-between;
  width: 50%;
  margin-top: 30px;

`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700; 

`

const Amount = styled.div`
margin: 0px 5px;
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;

`
const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: #f3dcdc;
cursor: pointer;
margin-left: 50px;

&:hover{
    background-color: #f8f4f4;
}

`


const Product = () => {
  return (
    <Container>
          <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://viethongtextile.com/datafiles/images/WEEK-18/2022/MAR-WEEK%201/4_3.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Denium Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            inventore accusantium similique consequuntur repellendus
            voluptatibus mollitia, magnam sit at. Facilis, non quas neque fuga
            quam doloribus labore corrupti blanditiis quasi?
          </Desc>
          <Price>20$</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="DarkBlue" />
              <FilterColor color="Gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>

                          <Remove />
                          
              <Amount>1</Amount>
                          <Add />
            </AmountContainer>
            <Button>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
