import { styled } from "styled-components";



const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://img.freepik.com/premium-photo/always-together-beautiful-young-couple-looking-camera_425904-7446.jpg?w=1060") center;
  background-size: cover;
  
  `
const Wrapper = styled.div`
width: 25%;
padding: 20px;
background-color: white;

`
const Title = styled.h1`

font-style: 24px;
font-weight: 300;
`
const Form = styled.form`
display: flex;
flex-direction: column;
`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px;
padding: 10px;

`




const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
margin-bottom: 10px;

`
const Link = styled.a`
  cursor: pointer;
  margin: 5px 0px;
  text-decoration: underline;
  font-size: 12px;


`

const Signin = () => {
  return (
    <Container>
    <Wrapper>
      <Title>Sign In</Title>
      <Form>


        <Input placeholder="Email ID" />
        <Input placeholder="Password" />
       
       
          <Button>Login</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>

        

      </Form>
    </Wrapper>
  </Container>
  )
}

export default Signin
