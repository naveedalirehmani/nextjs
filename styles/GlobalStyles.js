import styled from "styled-components";

export const P1 = styled.p`
  font-size: 12px;
  margin-left: 5px;
  display: flex;
  justify-content: center;
  color: #585e8b;
`;

export const Heading = styled.h1`
  padding-top: 10px;
  color: #41cd7d;
`;

export const A = styled.li`
  cursor: pointer;
  color: #41cd7d;
  list-style: none;
  font-size: 12px;
  margin-left: 5px;
`;
export const TermsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 5px;
  align-items: center;
`;
export const CheckDiv = styled.div`
  display: flex;
  align-items: center;
`;
export const Hr = styled.p`
  color: #585e8b;
  &:after {
    background-color: #41cd7d;
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    left: 5px;
    vertical-align: middle;
    width: 32%;
  }
  &:before {
    background-color: #41cd7d;
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    right: 5px;
    vertical-align: middle;
    width: 32%;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
`;

export const Footer = styled.div`
  padding-top: 40px;
  padding-bottom: 5px;
`;
