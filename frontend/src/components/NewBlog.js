import styled from "styled-components"
import { Navbar } from "./Navbar"
import { SideBar } from "./SideBar"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {
  createTheme,
  ThemeProvider,
  alpha,
  getContrastRatio,
} from '@mui/material/styles';
import { useState } from "react";
import axios from "axios";

const violetBase = '#6947BF';
const violetMain = alpha(violetBase, 0.7);

const theme = createTheme({
  palette: {
    violet: {
      main: violetMain,
      light: alpha(violetBase, 1),
      dark: alpha(violetBase, 1),
      contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
    },
  },
});

export const NewBlog = () => {

  const [title, setTitle] = useState();
  const [readTime, setReadTime] = useState();
  const [conclusion, setConclusion] = useState();
  const [sections, setSections] = useState([{ subTitle: '', subBody: '' }])

  const handleSectionChange = (index, field, value) => {
    const newSections = sections.map((section, i) =>
      i === index ? { ...section, [field]: value } : section
    );
    setSections(newSections);
  };
  const addSection = () => {
    setSections([...sections, { subTitle: '', subBody: '' }]);
  };
  const removeLastSection = () => {
    if (sections.length > 1) {
      setSections(sections.slice(0, -1));
    }
  };

  const handleSubmit = async () =>{
    const blogData = {
      title:title,
      readTime:readTime,
      conclusion:conclusion,
      contents:sections
    }

    const res = await axios.post('/api/v1/blogs/new', blogData);
    console.log(res)
  }

  return (
    <>
      <Wrapper>
        <FlexCol>
          <Navbar />
          <FlexRow>
            <SideBar />
            <HomeWrapper>
              <HeaderWrapper>
                <HeadingWrapper>Create New Blog</HeadingWrapper>
              </HeaderWrapper>
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                margin="dense"
                onChange={(e) => setTitle(e.target.value)} />
              <TextField
                id="outlined-basic"
                label="Read-Time"
                type="number"
                variant="outlined"
                margin="dense"
                onChange={(e) => setReadTime(e.target.value)} />
              <TextField
                id="outlined-textarea"
                label="Conclusion"
                placeholder="Conclusion"
                multiline
                margin="dense"
                onChange={(e) => setConclusion(e.target.value)}
              />
              {sections.map((section, index) => {
                return (<>
                <TextField
                id={`subTitle-${index}`}
                label="Sub-Title"
                placeholder="Body"
                value={section.subTitle}
                multiline
                margin="dense"
                onChange={(e) => handleSectionChange(index, 'subTitle', e.target.value)}
              />
              <TextField
                id={`subBody-${index}`}
                label="Sub-Body"
                placeholder="Body"
                multiline
                value={section.subBody}
                margin="dense"
                onChange={(e) => handleSectionChange(index, 'subBody', e.target.value)}
              />
              </>)
              })}

              <ThemeProvider theme={theme}>
                <ButtonWrapper>
                  <Button variant="contained" color="violet" sx={{ width: "150px", alignSelf: "right", margin:"10px" }} onClick={addSection}>Add Section</Button>
                  <Button variant="contained" color="violet" sx={{ width: "160px", alignSelf: "right" }} onClick={removeLastSection}>Delete Section</Button>
                </ButtonWrapper>
                <Button
                  variant="contained"
                  color="violet"
                  sx={{ margin: "20px" }}
                onClick={handleSubmit}
                >
                  Submit
                </Button>
              </ThemeProvider>
            </HomeWrapper>
          </FlexRow>
        </FlexCol>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #E5ECF3;
  width:100vw;`

const ButtonWrapper = styled.div`
display: flex;
align-items:right;
justify-content:right;

`

const HeaderWrapper = styled.div`
  display: flex;
  margin-top:10px;
  flex-direction: column;
  align-items: left;
`

const HeadingWrapper = styled.div`
font-weight:800;
font-size:32px;
color:#1E2026;
line-height:38.4px;
`

const FlexRow = styled.div`
  display:flex;
  flex-direction: row;
`
const FlexCol = styled.div`
  display:flex;
  flex-direction:column;
`
const HomeWrapper = styled.div`
  border-radius:10px;
  width:100%;
  margin:50px 100px;
  display:flex;
  width:600px;
  justify-items:center;
  flex-direction:column;
  // border:5px solid #E5ECF3;
`