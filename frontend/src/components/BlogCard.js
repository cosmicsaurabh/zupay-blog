import styled from "styled-components"

export const BlogCard = ({Head}) =>{
  return (
    <>
      <Wrapper>
        <Heading>
        Why should I use Flashcards for revision?
        </Heading>
        <Content>
        There are several steps in the revision process when it comes to preparing for your exams. First, you need to understand the basics of each subject’s content; keywords, dates, quotes and equations. The next step is building on your knowledge and applying it to answer increasingly more difficult questions, gradually adding more complex knowledge and understanding before eventually completing practice exam papers.
        </Content>
        <Content>
        The most important step is the first, getting to grips with the basic building blocks of your subject, and using flashcards is a great way to achieve this. A flashcard has information on both sides; usually a keyword or question on one and the corresponding definition or answer on the other. Flashcards are a great resource to practice active recall, a memorisation technique aimed at improving the retrieval of information stored in our brains. 
        </Content>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display:flex;
  width:600px;
  flex-direction:column;
  background-color:#FFFFFF;
  border-radius:10px;
  align-items:left;
  padding: 0px 20px;
  margin-top:24px;
`
const Heading = styled.div`
  margin:12px;
  padding:10px;
  font-weight:700;
  font-size:24px;
  line-height:28.8px;
  color:#1E2026;
`

const Content = styled.p`
  padding:0px 12px 12px 12px;
  font-weight:400;
  text-wrap:break-line;
  font-size:16px;
  line-height:20.8px;
  font-family:Bricolage Grotesque;
  color:#3D404B;
`
