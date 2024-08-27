import React, { useState } from 'react';
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete'; 
import EditIcon from '@mui/icons-material/Edit'; 
import { useNavigate } from 'react-router-dom';
import { useAuth } from "./store/auth";
import Modal from './Modal'; // Import the Modal component
import EditBlog from './EditBlog';

const BlogHeading = ({ _id, title, creatorId, publishedTime, publishedDate, daysold, readTime,conclusion,contents }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false); 
  const [showEditModal, setShowEditModal] = useState(false); 
  
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUserId } = useAuth();

  const handleDelete = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_BASE_BACKEND_URL}/api/v1/blogs/delete/${_id}`);
      navigate("/");
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };
  const toggleDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };

  const toggleEditModal = () => {
    setShowEditModal(!showEditModal);
  };

  return (
    <HeaderWrapper>
      <HeadingWrapper> {title}</HeadingWrapper>
      <FlexRow>
        {location.pathname === "/" ? (
          <>
            <FlexCol>
              <InnerHeadingWrapper>Published</InnerHeadingWrapper>
              <InnerHeadingWrapper>{daysold} days ago</InnerHeadingWrapper>
            </FlexCol>
            <FlexCol>
              <InnerHeadingWrapper>Read Time</InnerHeadingWrapper>
              <InnerHeadingWrapper>{readTime} minutes</InnerHeadingWrapper>
            </FlexCol>
          </>
        ) : (
          <>
            <FlexCol>
              <InnerHeadingWrapper>Publish Date</InnerHeadingWrapper>
              <InnerHeadingWrapper>{publishedDate}</InnerHeadingWrapper>
            </FlexCol>
            <FlexCol>
              <InnerHeadingWrapper>Publish Time</InnerHeadingWrapper>
              <InnerHeadingWrapper>{publishedTime}</InnerHeadingWrapper>
            </FlexCol>
            <FlexCol>
              <InnerHeadingWrapper>Read Time</InnerHeadingWrapper>
              <InnerHeadingWrapper>{readTime} min</InnerHeadingWrapper>
            </FlexCol>
            <FlexCol>
              <EditIconWrapper
                active={currentUserId === creatorId}
                onClick={currentUserId === creatorId ? toggleEditModal : null}
              >
                <EditIcon style={{ cursor: 'pointer' }} />
              </EditIconWrapper>
              <DeleteIconWrapper
                active={currentUserId === creatorId}
                onClick={currentUserId === creatorId ? toggleDeleteModal : null}
              >
                <DeleteIcon style={{ cursor: 'pointer' }} />
              </DeleteIconWrapper>
            </FlexCol>
          </>
        )}
      </FlexRow>

      {showDeleteModal && (
        <Modal>
          <FlexCol>
          
          <p >Are you sure you want to delete this blog?</p>

          <FlexRow>
          <ModalButton onClick={handleDelete} color="red">Delete</ModalButton>
          <ModalButton onClick={toggleDeleteModal} color="gray">Cancel</ModalButton>
          </FlexRow>

          </FlexCol>
        </Modal>
      )}

      {/* Edit Blog Modal */}
      {showEditModal && (
        <Modal>
          <FlexCol>

          <EditBlog 
          _id={_id}
          title={title}
          contents={contents}
          readTime={readTime}
          conclusion={conclusion}
          />
          <ModalButton onClick={toggleEditModal} color="gray" >Discard Changes</ModalButton>
          </FlexCol>
        </Modal>
      )}
    </HeaderWrapper>
  );
};

export default BlogHeading;

const HeaderWrapper = styled.div`
  display: flex;
  margin-top:10px;
  flex-direction: column;
  align-items: left;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal; 
`;

const HeadingWrapper = styled.div`
  font-weight:800;
  font-size:32px;
  color:#1E2026;
  line-height:38.4px;
`;

const InnerHeadingWrapper = styled.div`
  font-weight:600;
  margin:10px;
  font-family:Bricolage Grotesque;
  font-size:14px;
  color:#5B6170;
  line-height:16.8px;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 12px;
  flex-direction: row;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const EditIconWrapper = styled.div`
margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  // padding: 5px;
  margin: 5px;
  padding :2px;
  border-width: 2px;
  border-radius: 8px;
  border-style: dotted;
  border-color: ${props => (props.active ? '#6947bf' : 'gray')};
  color: ${props => (props.active ? '#6947bf' : 'gray')};
  cursor: ${props => (props.active ? 'pointer' : 'not-allowed')};
  
  &:hover {
    border-color: #6947bf;
    background-color: ${props => (props.active ? 'green' : 'transparent')};
    color: ${props => (props.active ? '#fff' : 'gray')};
    }
    `;
    
    const DeleteIconWrapper = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  // padding: 5px;
  margin: 5px;
  padding :2px;
    border-width: 2px;
    border-radius: 8px;
    border-style: groove;
    border-color: ${props => (props.active ? '#6947bf' : 'gray')};
    color: ${props => (props.active ? '#6947bf' : 'gray')};
    cursor: ${props => (props.active ? 'pointer' : 'not-allowed')};
    &:hover {
      border-color: #6947bf;
      background-color: ${props => (props.active ? 'red' : 'transparent')};
      color: ${props => (props.active ? '#fff' : 'gray')};
  }
`;

const ModalButton = styled.button`
  background-color: ${props => props.color};
  color: white;
  margin: 5px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
