import { styled } from "styled-components"

const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
const Title = styled.h1`
color: white;
margin-bottom: 20px;
`
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Button = styled.button`
border: none;
padding: 10px;
background-color: fffff;
color: gray;
cursor: pointer;
font-weight: 600;

`



const CategoriesItems = ({item}) => {
  return (
    <Container>
      <Image src={item.img} alt="" />
      <Info >
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
        </Info >

    </Container>
  )
}

export default CategoriesItems
