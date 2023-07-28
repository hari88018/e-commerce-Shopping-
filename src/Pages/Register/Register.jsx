import { styled } from "styled-components";



const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://img.freepik.com/free-photo/joyful-girl-with-curly-brown-hair-dancing-purple-background-with-kissing-face-expression_197531-7071.jpg?w=1380&t=st=1688379575~exp=1688380175~hmac=88fc96d94bdf1b8038f66c55679ec2ab65ecfd78933c62bd8e45730875cbb33f") center;
  background-size: cover;
  
  `
const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: white;

`
const Title = styled.h1`

font-style: 24px;
font-weight: 300;
`
const Form = styled.form`
display: flex;
flex-wrap: wrap;

`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 20px 0px 0px;
padding: 10px;

`


const Agrement = styled.span`
font-size: 12px;
margin: 20px 0px;
`

const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
border: none;

`
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create An Account</Title>
        <Form >
          <Input placeholder="Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="User Name" />

          <Input placeholder="Email ID" />
          <Input placeholder="Password" />
          <Input placeholder="cnfrm password"/>
          <Agrement>
            By creating account,I consent  to the processing of  my personal data
            in accordance with the <b>Privacy Policy</b>
            </Agrement>
              <Button>Create</Button>

          

        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
