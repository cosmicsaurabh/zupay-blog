import React from 'react'
import { BlogCard } from './BlogCard'
import { ContentCard } from './ContentCard'
import BlogHeading from './BlogHeading'
import styled from "styled-components"

const Blog = ({ title, published, contents, readTime, conclusion, comments }) => {
  return (
    <>
      <Wrapper>
        <BlogHeading
          title={title}
          published={published}
          readTime={readTime}
        />


        <ContentCard contents={contents} />


        {contents &&
          contents.map((content, index) => (
            <BlogCard
              key={index}
              subTitle={content.subTitle}
              subBody={content.subBody}
            />
          ))
        }

      </Wrapper>
    </>
  )
}

export default Blog

const Wrapper = styled.div`
  margin-bottom:150px;
`

const Heading = styled.p`
  color: #1E2026;
  font-weight: 700;
  font-size: 24px;
  font-family: Bricolage Grotesque;
  line-height: 28.8px;
`