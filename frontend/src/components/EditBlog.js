import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Alert } from '@mui/material';

const EditBlog = ({_id,title,contents,readTime,conclusion}) => {
  const navigate = useNavigate();
  
  const [blogData, setBlogData] = useState({
    title: "",
    contents: [],
    readTime: "",
    conclusion: ""
  });

  useEffect(() => {
      setBlogData({
        title:title,
        conclusion:conclusion,
        readTime:readTime,
        contents:contents
      });
  }, []);
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleContentChange = (index, field, value) => {
    const newContents = blogData.contents.map((content, i) => 
      i === index ? { ...content, [field]: value } : content
    );
    setBlogData((prevData) => ({
      ...prevData,
      contents: newContents,
    }));
  };

  const handleAddSection = () => {
    setBlogData((prevData) => ({
      ...prevData,
      contents: [...prevData.contents, { subTitle: '', subBody: '' }]
    }));
  };

  const handleDeleteSection = (index) => {
    const newContents = blogData.contents.filter((_, i) => i !== index);
    setBlogData((prevData) => ({
      ...prevData,
      contents: newContents,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_BASE_BACKEND_URL}/api/v1/blogs/update/${_id}`, blogData);
        console.log("Blog updated successfully");
        navigate('/')
        // navigate(`/DetailsPage`); // Optionally, navigate to the blog details page
    } catch (error) {
        console.error("Error updating blog:", error);
    }
};

  return (
    <FormWrapper onSubmit={handleSubmit}>
<FlexCol>
      <Label>Title</Label>
      <Input
        type="text"
        name="title"
        autoFocus
        value={blogData.title}
        onChange={handleInputChange}
        required
      />

      <Label>Read Time</Label>
      <Input
        type="number"
        name="readTime"
        value={blogData.readTime}
        onChange={handleInputChange}
        required
      />

      <Label>Conclusion</Label>
      <TextArea
      
        name="conclusion"
        value={blogData.conclusion}
        onChange={handleInputChange}
      />

      <Label>Contents</Label>
      {blogData.contents.map((content, index) => (
        <ContentSection key={index}>
          <Wrapcontent>

          <FlexCol>
          <Label>SubTitle {index + 1}</Label>
          <Input
            type="text"
            value={content.subTitle}
            onChange={(e) => handleContentChange(index, 'subTitle', e.target.value)}
            required
            />
            </FlexCol>
            <FlexCol>

          <Label>SubBody {index + 1}</Label>
          <TextArea
            value={content.subBody}
            onChange={(e) => handleContentChange(index, 'subBody', e.target.value)}
            required
            />
            </FlexCol>
            <FlexRow>

          <AddSectionButton type="button" onClick={handleAddSection}>Add Section</AddSectionButton>
          <DeleteSectionButton type="button" onClick={() => handleDeleteSection(index)}>Delete Section</DeleteSectionButton>
            </FlexRow>
      </Wrapcontent>
        </ContentSection>
      ))}
      
      <SubmitButton type="submit">Update Blog</SubmitButton>

      </FlexCol>
    </FormWrapper>
  );
};

export default EditBlog;

const SuccessAlert = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  padding: 10px 20px;
  background-color: green;
  color: white;
  border-radius: 5px;
  z-index: 1100;
`;
const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  flex-wrap: wrap;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
   justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
  text-align: center; /* Center text inside the <p> */
`;

const Wrapcontent = styled.div`
  background-color: #f7f4ff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

const Label = styled.label`
  font-size: 16px;
  color: #6947bf;
  margin-bottom: 4px;
  position: relative;
  top: 10px;
  left: 12px;
  background: #fff;
  padding: 0 4px;
  z-index: 10;
  pointer-events: none;
`;

const Input = styled.input`
  font-size: 16px;
  padding: 12px;
  border: 2px solid #6947bf;
  border-radius: 8px;
  transition: border-color 0.3s;
  width: 100%;
  box-sizing: border-box;
  &:focus {
    border-color: #ff9c01;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  font-size: 16px;
  padding: 12px;
  border: 2px solid #6947bf;
  border-radius: 8px;
  min-height: 100px;
  resize: none;
  transition: border-color 0.3s, height 0.3s;
  width: 100%;
  box-sizing: border-box;
  &:focus {
    border-color: #ff9c01;
    outline: none;
  }
`;

const ContentSection = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

const AddSectionButton = styled.button`
  background-color: #6947bf;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 12px;
  &:hover {
    background-color: #4e369f;
  }
`;

const DeleteSectionButton = styled.button`
  background-color: #e74c3c;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 12px;
  &:hover {
    background-color: #c0392b;
  }
`;

const SubmitButton = styled.button`
  background-color: #ff9c01;
  color: #fff;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: background-color 0.3s;
  &:hover {
    background-color: #e68a00;
  }
`;
