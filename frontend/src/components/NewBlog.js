import styled from "styled-components";
import { Navbar } from "./Navbar";
import { SideBar } from "./SideBar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useAuth } from "./store/auth";
import {
  createTheme,
  ThemeProvider,
  alpha,
  getContrastRatio,
} from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const violetBase = "#6947BF";
const violetMain = alpha(violetBase, 0.7);

const theme = createTheme({
  palette: {
    violet: {
      main: violetMain,
      light: alpha(violetBase, 1),
      dark: alpha(violetBase, 1),
      contrastText:
        getContrastRatio(violetMain, "#fff") > 4.5 ? "#fff" : "#111",
    },
  },
});

export const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [readTime, setReadTime] = useState("");
  const [conclusion, setConclusion] = useState("");
  const [sections, setSections] = useState([{ subTitle: "", subBody: "" }]);
  const [errorMsg, setErrorMsg] = useState([]);

  const navigate = useNavigate();
  const { currentUserId } = useAuth();

  const handleSectionChange = (index, field, value) => {
    const newSections = sections.map((section, i) =>
      i === index ? { ...section, [field]: value } : section
    );
    setSections(newSections);
  };
  const addSection = () => {
    setSections([...sections, { subTitle: "", subBody: "" }]);
  };
  const removeLastSection = () => {
    if (sections.length > 1) {
      setSections(sections.slice(0, -1));
    }
  };

  const handleSubmit = async () => {
    setErrorMsg([]);
    if (!title) {
    setErrorMsg(errorMsg =>[...errorMsg,"Title is required."]);
  }

  if (!readTime || isNaN(readTime) || readTime <= 0) {
    setErrorMsg(errorMsg =>[...errorMsg,"Read Time is required and must be a positive number."]);
  }

  sections.forEach((section, index) => {
    if (!section.subTitle) {
      setErrorMsg(errorMsg =>[...errorMsg,`Sub-Title is required for section ${index + 1}.`]);
    }
    if (!section.subBody) {
      setErrorMsg(errorMsg =>[...errorMsg,`Sub-Body is required for section ${index + 1}.`]);
    }
  });

  if(errorMsg.length>0) return;


    const formatDateWithLeadingZeros = (date) => {
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
      const year = date.getFullYear();

      return `${day}/${month}/${year}`;
    };
    const formattedDate = formatDateWithLeadingZeros(new Date());


    const formatTimeWithLeadingZeros = (date) => {
      const d = new Date(date);
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const seconds = String(d.getSeconds()).padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
    };
    const formattedTime = formatTimeWithLeadingZeros(new Date());

    const blogData = {
      title: title,
      readTime: readTime,
      conclusion: conclusion,
      contents: sections,
      publishedDate: formattedDate,
      publishedTime: formattedTime,
      creatorId:currentUserId,
    };
    try {
    
      const response = await fetch(`${process.env.REACT_APP_BASE_BACKEND_URL}/api/v1/blogs/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });
    
      
    
      if (response.ok || response.status === 201) {
        // Alert("YaY !!!... Your Blog published successfully !!!"); iski wjah se error
        navigate("/");
      } else if (response.status === 400) {
        const responseData = await response.json();
        setErrorMsg(responseData.msg);
      } else {
        setErrorMsg(["An unexpected error occurred. Please try again."]);
      }
    } catch (error) {
      console.error("Fetch error:", error); // Log the error for debugging
      setErrorMsg(["Service is down... try again later"]);
    }
    
  };

  return (
    <>
      <Wrapper>
        <FlexCol>
          <Navbar />
          <FlexRow>
            <SideBar />
            <Flexpublish>
              <HomeWrapper>
                <HeaderWrapper>
                  <HeadingWrapper>Publish a Blog !</HeadingWrapper>
                </HeaderWrapper>
                <TextField
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                  margin="dense"
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                  id="outlined-basic"
                  label="Read-Time"
                  type="number"
                  variant="outlined"
                  margin="dense"
                  required
                  onChange={(e) => setReadTime(e.target.value)}
                />

                {sections.map((section, index) => {
                  return (
                    <>
                      <TextField
                        id={`subTitle-${index}`}
                        label="Sub-Title"
                        placeholder="Body"
                        value={section.subTitle}
                        multiline
                        margin="dense"
                        required
                        onChange={(e) =>
                          handleSectionChange(index, "subTitle", e.target.value)
                        }
                      />
                      <TextField
                        id={`subBody-${index}`}
                        label="Sub-Body"
                        placeholder="Body"
                        multiline
                        value={section.subBody}
                        margin="dense"
                        required
                        onChange={(e) =>
                          handleSectionChange(index, "subBody", e.target.value)
                        }
                      />
                    </>
                  );
                })}
                <TextField
                  id="outlined-textarea"
                  label="Conclusion"
                  placeholder="Conclusion"
                  multiline
                  margin="dense"
                  onChange={(e) => setConclusion(e.target.value)}
                />

                <ThemeProvider theme={theme}>
                  <ButtonWrapper>
                    <Button
                      variant="contained"
                      color="violet"
                      sx={{ width: "15px", alignSelf: "right", margin: "10px" }}
                      onClick={addSection}
                    >
                      +
                    </Button>

                    <Button
                      variant="contained"
                      color="violet"
                      sx={{ width: "15px", alignSelf: "right", margin: "10px" }}
                      onClick={removeLastSection}
                    >
                      -
                    </Button>
                  </ButtonWrapper>
                  {/* {errorMsg && <p className="error-message">{errorMsg}</p>} */}
                  {errorMsg.length > 0 && (
                    <ErrorMessage>
                      {errorMsg.map((error, index) => (
                        <li key={index}>{error}</li>
                      ))}
                    </ErrorMessage>
                  )}
                  <Button
                    variant="contained"
                    color="violet"
                    sx={{ margin: "25px" }}
                    onClick={handleSubmit}
                  >
                    Publish
                  </Button>
                </ThemeProvider>
              </HomeWrapper>
            </Flexpublish>
          </FlexRow>
        </FlexCol>
      </Wrapper>
    </>
  );
};
const ErrorMessage = styled.div`
  color: #ff0000; /* Using a distinct error color */
  font-size: 16px; /* Consistent font size */
  margin-top: 5px;
  margin-bottom: 5px;
  list-style-type: disc;
  padding-left: 20px; /* Matching padding with other components */
  line-height: 34.8px; /* Improved readability */
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e5ecf3;
  width: 100vw;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: right;
  justify-content: right;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  // flex-direction: column;
  justify-content: center;
  align-items: left;
`;

const HeadingWrapper = styled.div`
  font-weight: 800;
  font-size: 32px;
  color: #6947bf;
  line-height: 38.4px;
  margin: 20px;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const Flexpublish = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;
const HomeWrapper = styled.div`
  border-radius: 10px;
  width: 100%;
  padding: 5px;
  margin: 50px;
  display: flex;
  justify-content: center;
  width: 600px;
  justify-items: center;
  flex-direction: column;
  border: 1px double #6947bf;
`;
