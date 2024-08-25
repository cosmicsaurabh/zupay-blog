import styled from "styled-components"
import { Book, HouseDoor, JournalBookmark, PersonGear, PersonRolodex, QuestionCircle } from "react-bootstrap-icons"

export const SideBar = () =>{
  return (
    <>
    <Wrapper>
    <FlexCol>
      <SidebarLogoWrapperActive>
        <HouseDoor size={30} color="#FFFFFF" className="mt-5"/>
      </SidebarLogoWrapperActive>
      <SidebarLogoWrapper>
        <Book size={30} color="#3D404B" className="mt-5"/>
      </SidebarLogoWrapper>
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