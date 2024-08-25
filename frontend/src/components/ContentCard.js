import styled from "styled-components"

export const ContentCard = () =>{
  return (
    <>
      <Wrapper>
        <Heading>
          Content
        </Heading>
        <p>1. sandjasndjasbdneucnwenciewniewndiewndiwendiweondoiwednweidnwei</p>
        <p>2. sandjasndjasbdneucnwenciewniewndiewndiwendiwasdasdaseondoiwednweidnwei</p>
        <p>3. sandjasndjasbdneucnwenciewniewndiewndiwendiweondoiwednweidnwei</p>
        <p>4. sandjasndjasbdneucnwenciewniewndiewndiwendiwadasdsadeondoiwednweidnwei</p>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  background-color:#FFFFFF;
  padding:0px 20px;
  margin-top:10px;
  width:600px;
  text-wrap:wrap;
  align-items: left;
  border-radius:10px;

`
const Heading = styled.p`
  color:#1E2026;
  font-weight:700;
  font-size:24px;
  font-family:Bricolage Grotesque;
  line-height:28.8px;
`