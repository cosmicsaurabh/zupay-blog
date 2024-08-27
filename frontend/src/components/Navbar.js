import styled from "styled-components"
import { useAuth } from "./store/auth";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';
export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };
  const handleLogoutClick = () => {
    navigate("/logout");
  };
  const handleLogoClick = () => {
    navigate("/");
  };

  return (<Wrapper>
    <img src={logo} alt="ZuAi" onClick={handleLogoClick}></img>
    <FlexRow>
      {
        (!isLoggedIn )?    
        ( <>
        <LoginButton onClick={handleLoginClick}>Login</LoginButton>
        <RegisterButton onClick={handleRegisterClick}>Register</RegisterButton> 
        </>

        ):(
          <LogoutButton onClick={handleLogoutClick}>Logout</LogoutButton>)
        
        
      }
    {/* <LoginButton onClick={handleLoginClick}>Login</LoginButton>
    <SignUpButton onClick={handleRegisterClick}>Join Now</SignUpButton> */}
    </FlexRow>
  </Wrapper>)
}

const Wrapper = styled.div`
  height:60px;
  background-color: #FFFFFF;
  border-top: 4px solid #6947BF;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  padding: 10px;`

const FlexRow = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
`

const LoginButton = styled.button`
  border:2px solid #EAF0F2;
  background-color:#FFFFFF;
  border-radius:20px;
  color:#5B6170;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight:600;
  padding: 12px;
  margin:10px;
  line-height: 18px;
  text-align: left;
  font-family:Bricolage Grotesque;
  `
const LogoutButton = styled.button`
  border:2px solid #EAF0F2;
  background-color:#af3737;
  border-radius:20px;
  color:#fafbff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight:600;
  padding: 12px;
  margin:10px;
  line-height: 18px;
  text-align: left;
  font-family:Bricolage Grotesque;
  `

  const RegisterButton = styled.button`
  border:0px;
  background-color:#6947BF;
  border-radius:20px;
  color:#FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight:600;
  padding:12px;
  margin:10px;
  line-height: 18px;
  text-align: left;
  font-family:Bricolage Grotesque;
  `