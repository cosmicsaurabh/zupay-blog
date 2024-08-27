import React from 'react'
import styled from "styled-components"
import { useNavigate, useLocation } from "react-router-dom";
import Blog from './Blog'
import { SideBar } from './SideBar'

const DetailsPage = () => {
  const location = useLocation();
  const { _id,creatorId, title, publishedTime,publishedDate, contents, readTime, conclusion, comments } = location.state || {};
  
  return (
    <>
    <Wrapper>
      <FlexCol>
        <FlexRow>
          <SideBar/>
            <HomeWrapper>
            <Blog
            _id = {_id}
            creatorId={creatorId}
            title = {title}
            publishedTime = {publishedTime}
            publishedDate = {publishedDate}
            contents = {contents}
            readTime = {readTime}
            conclusion = {conclusion}
            comments = {comments}
            />
            
          </HomeWrapper>
        </FlexRow>
      </FlexCol>
      </Wrapper>
      
    </>
  )
}

export default DetailsPage;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #E5ECF3;
  width:100vw;`
const FlexRow = styled.div`
display:flex;
flex-direction: row;
`
const FlexCol = styled.div`
display:flex;
flex-direction:column;
`

const HomeWrapper = styled.div`
border-radius: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  `;
