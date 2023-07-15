import {   Search } from "@mui/icons-material";
import { styled } from "styled-components";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';




const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0,0,0,0.2);

z-index: 3;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.5s ease;
cursor: pointer;
`


const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: white;
position: relative;


&:hover ${Info}{
opacity: 1;
}
`
const Image = styled.img`
height: 75%;
z-index: 2;

`
const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
`


const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
display: flex;
align-items: center;
background-color: gray;

justify-content: center;
margin: 8px;
transition: all 0.5s ease;



&:hover{
    background-color: aqua;
    transform: scale(1.1);
}


`
const Product = ({item}) => {
  return (
      <Container>
          <Circle />
          <Image src={item.img} ></Image>
          <Info>
              <Icon>
                  <ShoppingCartOutlinedIcon/>
              </Icon>
              <Icon>
                  <Search/>
              </Icon>
              <Icon>
                  <FavoriteBorderOutlinedIcon/>
              </Icon>
          </Info>
          </Container>

  )
}

export default Product
