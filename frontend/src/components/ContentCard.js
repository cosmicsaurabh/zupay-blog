import styled from "styled-components"

export const ContentCard = () => {
  return (
    <>
      <Wrapper>
        <Heading>
          Content
        </Heading>
        <p><a href="#one">1. one</a></p>
        <p><a href="#two">2. two</a></p>
        <p><a href="#three">3. three</a></p>
        <p><a href="#four">4. four</a></p>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  background-color: #FFFFFF;
  padding: 0px 20px;
  margin-top: 10px;
  width: 600px;
  text-wrap: wrap;
  align-items: left;
  border-radius: 10px;
`

const Heading = styled.p`
  color: #1E2026;
  font-weight: 700;
  font-size: 24px;
  font-family: Bricolage Grotesque;
  line-height: 28.8px;
`
