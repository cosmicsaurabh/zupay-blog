import styled from "styled-components"

export const BlogCard = ({id,title,description}) => {
  console.log({title})
  return (
    <>
      <Wrapper id={id}>
        <Heading>
          one:title {title}
        </Heading>
        <Content>
          11:desc {description}
        </Content>
      </Wrapper>
      {/* <Wrapper id="two">
        <Heading>
          two
        </Heading>
        <Content>
          22
        </Content>
      </Wrapper>
      <Wrapper id="three">
        <Heading>
          three
        </Heading>
        <Content>
          33
        </Content>
      </Wrapper>
      
      <Wrapper id="four">
        <Heading>
          four
        </Heading>
        <Content>
          44
        </Content>
      </Wrapper> */}
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 600px;
  flex-direction: column;
  background-color: #FFFFFF;
  border-radius: 10px;
  align-items: left;
  padding: 0px 20px;
  margin-top: 24px;
`

const Heading = styled.div`
  margin: 12px;
  padding: 10px;
  font-weight: 700;
  font-size: 24px;
  line-height: 28.8px;
  color: #1E2026;
`

const Content = styled.p`
  padding: 0px 12px 12px 12px;
  font-weight: 400;
  text-wrap: break-line;
  font-size: 16px;
  line-height: 20.8px;
  font-family: Bricolage Grotesque;
  color: #3D404B;
`
