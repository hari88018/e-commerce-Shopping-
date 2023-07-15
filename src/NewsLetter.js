import { Send } from "@mui/icons-material";
import { styled } from "styled-components";


const Container = styled.div`
background-color: #fcf5f5;
display: flex;
justify-content: center;
align-items: center;
height: 60vh;
flex-direction: column;
`
const Title = styled.h1`
`
const Disc = styled.p`
font-size: 26px;
font-weight: 600;
margin-bottom: 20;
`
const Inputcantainer = styled.div`
width: 50%;
height: 40px;
background-color: #ffff;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
align-items: center;

`
const Input = styled.input`
height:40px;
padding-left: 20px;
border: none;
flex: 8;
;
`
const Button = styled.button`
flex: 1;
border: none;
background-color: teal;
color: white;
height: 40px;
`

const NewsLetter = () => {
  return (
    <Container>
      <Title>News Letter</Title>
      <Disc>Keep It Relevant to Their Lifestyle</Disc>
          <Inputcantainer>
              <Input placeholder="Enter your Mail id"/>
              <Button>
                  <Send/>
              </Button>
          </Inputcantainer>
    </Container>
  )
}

export default NewsLetter
