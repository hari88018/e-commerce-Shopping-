import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { keyframes, styled } from "styled-components";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { sliderItems } from "../../data";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const goToNext = () => {
    sliderRef.slickNext();
  };

  const goToPrev = () => {
    sliderRef.slickPrev();
  };

  const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f8f1ea;
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
    cursor: pointer;
    opacity: 0.5;
    margin: auto;
    z-index: 2;
  `;

  const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
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

  let sliderRef;

  return (
    <Container>
      <Arrow>
        <ArrowLeftIcon
          style={{ marginRight: "10px", left: 0 }}
          onClick={goToPrev}
        />
      </Arrow>
      <Slider {...settings} ref={(slider) => (sliderRef = slider)}>
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
      </Slider>
      <div style={{ textAlign: "center", marginTop: "20px" }}></div>
      <Arrow style={{ marginRight: "10px", right: 0 }} onClick={goToNext}>
        <ArrowRightIcon />
      </Arrow>
    </Container>
  );
};

export default Carousel;
