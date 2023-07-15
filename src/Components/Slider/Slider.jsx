import React, { useState } from "react";
import { keyframes, styled } from "styled-components";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { sliderItems } from "../../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f8f1ea;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "30px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  margin: auto;
  z-index: 2;
`;
const scroll=keyframes`
  0%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(calc(-290px*9));
  }
`
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  animation: ${scroll} 10s linear infinite;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  animation: scroll 40s linear infinite;
`;



const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Image = styled.img`
  height: 100%;
`;
const Title = styled.h1`
  color: #111111;
  font-size: 70px;
`;
const Disc = styled.p`
  color: #111111;
  font-size: 20px;
  margin: 50px 0px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 9px;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: transform 1.5s ease;
  transform: translateX(-${(props) => props.slideIndex * 100}vw);
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex-1:2);
    } else {
      setSlideIndex((slideIndex < 2) ? slideIndex+1:0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} alt="" />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Disc>{item.desc}</Disc>
              <Button>click here</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
