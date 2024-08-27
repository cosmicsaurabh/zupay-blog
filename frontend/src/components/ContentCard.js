import styled from "styled-components"

export const ContentCard = ({_id,contents}) => {
  return (
    <>
      <Wrapper>
        <Heading>
          Content
        </Heading>

        <Content>
        { contents?.map((content, index) => {
          return ( 
            <>
           <a href={`#${_id}-${index}`}> {index + 1}. {content.subTitle}</a>
           <br/>
           </>
        )
      })
    }
    </Content>
        
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


const Content = styled.p`
  padding: 0px 12px 12px 12px;
  font-weight: 400;
  text-wrap: break-line;
  font-size: 16px;
  line-height: 20.8px;
  font-family: Bricolage Grotesque;
  color: #3D404B;
`
