import styled from "styled-components";
import { Book, HouseDoor, JournalBookmark, PersonGear, PersonRolodex, Plus, QuestionCircle } from "react-bootstrap-icons";
import { useNavigate, useLocation } from "react-router-dom";

export const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  
  return (
    <>
      <Wrapper>
        <FlexCol>
          <SidebarLogoWrapper
            isActive={location.pathname === "/"}
            onClick={() => navigate("/")}
          >
            <HouseDoor
              size={30}
              color={location.pathname === "/" ? "#FFFFFF" : "#3D404B"}
              className="mt-5"
            />
          </SidebarLogoWrapper>

          <SidebarLogoWrapper
            isActive={location.pathname === "/bookmarks"}
            onClick={() => navigate("/Bookmark")}
          >
            <JournalBookmark
              size={30}
              color={location.pathname === "/bookmarks" ? "#FFFFFF" : "#3D404B"}
              className="mt-5"
            />
          </SidebarLogoWrapper>

          <SidebarLogoWrapper
            isActive={location.pathname === "/newBlog"}
            onClick={() => navigate("/newBlog")}
          >
            <Plus
              size={40}
              color={location.pathname === "/newBlog" ? "#FFFFFF" : "#3D404B"}
              className="mt-4"
            />
          </SidebarLogoWrapper>


          {/* Repeat for other icons */}
          {/* Example: */}
          <SidebarLogoWrapper
            isActive={location.pathname === "/profile"}
            onClick={() => navigate("/profile")}
          >
            <PersonRolodex
              size={30}
              color={location.pathname === "/profile" ? "#FFFFFF" : "#3D404B"}
              className="mt-5"
            />
          </SidebarLogoWrapper>

          <SidebarLogoWrapper
            isActive={location.pathname === "/settings"}
            onClick={() => navigate("/settings")}
          >
            <PersonGear
              size={30}
              color={location.pathname === "/settings" ? "#FFFFFF" : "#3D404B"}
              className="mt-5"
            />
          </SidebarLogoWrapper>

          {/* Add other icons as needed */}
        </FlexCol>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: #ffffff;
  position: sticky;
  top: 0;
  height: 100vh;
`;

const SidebarLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 10px 20px 15px 0px;
  background-color: ${({ isActive }) => (isActive ? "#6947BF" : "#FFFFFF")};
  border-radius: 10px;
  color: ${({ isActive }) => (isActive ? "#FFFFFF" : "#3D404B")};
`;

const FlexCol = styled.div`
  display: flex;
  padding-left: 10px;
  flex-direction: column;
  align-items: center;
`;
