import React from "react";
import { styled } from "styled-components";
import Navbar from "../Components/Navbar/Navbar";

import Announcement from "../Components/Announcement/Announcement";
import Products from "../Components/Products";
import NewsLetter from "../NewsLetter";
import Footer from "../Components/Footer";
const Container = styled.div``;

const Filter = styled.div`
  margin: 20px;
  display: flex;
flex-direction: row;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h1`
  margin: 20px;
`;
const FilterText = styled.div`

  font-size: 20px;
  font-weight: 600;
  
`;
const Select = styled.select`
padding: 10px;
margin-right: 20px;

`;
const Option = styled.option`
margin-bottom : 50px;
`;
const ProductsList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products :</FilterText>
          <Select>
            <Option disabled selected>
              Colours
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
            <Option>Yellow</Option>
            <Option>Red</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>

            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
            <Option>Red</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products :</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>

            <Option>Price (dsc)</Option>

          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductsList;
