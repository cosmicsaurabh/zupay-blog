import React from 'react';
import styled from 'styled-components';

const Modal = ({ children }) => {
  return (
    <ModalWrapper>
      <ModalContent>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(8px);
  z-index: 1000;
  overflow: "auto"
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 0px;
  border-radius: 12px;
  display: ;
  width: 80%;
  // max-width: 80%;
  max-height: 90vh;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  // align-item:center;
  justify-content:center;
  // flex-direction: column;
  // overflow: auto

  overflow:auto;
  align-items: center;
`;


// const ModalWrapper = styled.div`
//   position:fixed;
  
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   overflow:y;
//   background-color: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   backdrop-filter: blur(8px);
//   z-index:1000;
// `;

// const ModalContent = styled.div`
// display:flex;
// justify-content:center;
// align-items:center;
//   background-color: white;
//   padding: 20px;
//   border-radius: 5px;
//   text-align: center;
//   // height:10;
//   overflow:auto;
// `;
