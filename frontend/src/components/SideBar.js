import styled from "styled-components"
import { Book, HouseDoor, JournalBookmark, PersonGear, PersonRolodex, Plus, QuestionCircle } from "react-bootstrap-icons"
import { useNavigate } from "react-router-dom"

export const SideBar = () =>{
  const navigate = useNavigate();
  const handleNavigateNewBlog = () =>{
    navigate("/newBlog");
  }

  const handleNavigateHome = () =>{
    navigate("/")
  }

  return (
    <>
    <Wrapper>
    <FlexCol>
      <SidebarLogoWrapper>
        <Plus size={40} color="#3D404B" className="mt-4" onClick={handleNavigateNewBlog}/>
      </SidebarLogoWrapper>
      <SidebarLogoWrapperActive>
        <HouseDoor size={30} color="#FFFFFF" className="mt-5" onClick={handleNavigateHome}/>
      </SidebarLogoWrapperActive>
      <SidebarLogoWrapper>
        <JournalBookmark size={30} color="#3D404B" className="mt-5"/>
      </SidebarLogoWrapper>
      <SidebarLogoWrapper>
        <PersonRolodex size={30} color="#3D404B" className="mt-5"/>
      </SidebarLogoWrapper>
      <SidebarLogoWrapper>
        <QuestionCircle size={30} color="#3D404B" className="mt-5"/>
      </SidebarLogoWrapper>
      <SidebarLogoWrapper>
        <PersonGear size={30} color="#3D404B" className="mt-5"/>
      </SidebarLogoWrapper>
      <SidebarLogoWrapper>
        <PersonGear size={30} color="#3D404B" className="mt-5"/>
      </SidebarLogoWrapper>
      <SidebarLogoWrapper>
        <PersonGear size={30} color="#3D404B" className="mt-5"/>
      </SidebarLogoWrapper>
        <SidebarLogoWrapper>
      <PersonGear size={30} color="#3D404B" className="mt-5"/>
        </SidebarLogoWrapper>
      <SidebarLogoWrapper>
        <PersonGear size={30} color="#3D404B" className="mt-5"/>
      </SidebarLogoWrapper>
    </FlexCol>
    </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  background-color: #FFFFFF;
  position:sticky;
  top:0;
  height:100vh;
`

const SidebarLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding:10px;
  margin:10px 20px 15px 0px;
`
const SidebarLogoWrapperActive = styled.div`
  display: flex;
  align-items: center;
  background-color:#6947BF;
  border-radius:10px;
  color:#FFFFFF;
  justify-content: center;
  padding:10px;
  margin:10px 20px 15px 0px;
`

const FlexCol = styled.div`
display:flex;
padding-left:10px;
flex-direction: column;
align-items: center;
`