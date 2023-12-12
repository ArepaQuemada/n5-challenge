import styled from "styled-components";

export const StyledSelect = styled.select`
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 0.75rem;
  font-size: 16px;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  position: relative;
  min-width: 250px;
  margin-top: 2rem;
  margin-bottom: 2rem;

  &:hover {
    border-color: #aaa;
  }

  &:focus {
    border-color: #2196f3;
  }

  & .--option {
    padding: 0.75rem;
    background-color: white;
  }
`;
