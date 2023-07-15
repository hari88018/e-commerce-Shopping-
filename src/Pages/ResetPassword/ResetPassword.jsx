import { styled } from "styled-components";



const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://www.standout.co.uk/blog/wp-content/uploads/2022/04/Screenshot-85-770x493.png") center;
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

const ResetPassword = () => {
  return (
    <Container>
    <Wrapper>
      <Title>Forget Password</Title>
      <Form>


        <Input placeholder="New Password" />
        <Input placeholder="Password" />
       
       
          <Button>Login</Button>
        

        

      </Form>
    </Wrapper>
  </Container>
  )
}

export default ResetPassword
