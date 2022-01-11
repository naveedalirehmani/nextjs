import styled from "styled-components";

export const Button = styled.button`
position:relative;
display: flex;
justify-content: center;
margin-left:auto;
margin-right:auto;
align-items: center;
background:${({isLoading})=>isLoading ? "#34ad69 ": "#41cd7d"} ;
cursor:${({isLoading})=>isLoading ? "not-allowed": "pointer"} ;
  border: none;
  outline: none;
  border-radius: 20px;
  width: 16rem;
  color: #202442;
  height: 35px;
  margin-bottom: 5px;
  margin-top: 20px;
  font-size: 15px;
`;
