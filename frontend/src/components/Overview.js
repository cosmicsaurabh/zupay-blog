import React from 'react'
import { ContentCard } from './ContentCard'
import BlogHeading from './BlogHeading'
import styled from "styled-components"
import { useNavigate } from 'react-router-dom'

const Overview = ({ _id,creatorId, title, publishedDate,publishedTime, contents, readTime, conclusion, comments }) => {
  const navigate = useNavigate();
  const handleDetailsPage =() =>{

    navigate("/DetailsPage", { state: { _id,creatorId, title, publishedTime, publishedDate, contents, readTime, conclusion, comments } })
  }

  const daysOld = (publishedDate) => {
    const [day, month, year] = publishedDate.split('/').map(Number);
    
    const publishedd = new Date(`${year}-${month}-${day}`);
    
    const currentDate = new Date();
    const differenceInTime = currentDate - publishedd;
    const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
    
    return differenceInDays;
  };
  return (
    <>
      <OverviewWrapper onClick={handleDetailsPage}>
        <BlogHeading
          title={title}
          creatorId={creatorId}
          daysold = {daysOld(publishedDate)}
          publishedDate={publishedDate}
          publishedTime={publishedTime}
          readTime={readTime}
        />
        <ContentCard contents={contents} _id={_id} />
      </OverviewWrapper>
    </>
  )
}

export default Overview;

const OverviewWrapper = styled.div`
  margin-bottom:150px;
  display:flex;
  flex-direction:column;
  width: 600px;
  align-items:center;
`
