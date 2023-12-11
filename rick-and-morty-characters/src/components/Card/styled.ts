import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 1rem;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 300px;
  & .--avatar {
    object-fit: cover;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: auto;
    display: block;
    margin-bottom: 4rem;
  }

  & .--item {
    font-weight: bold;
  }

  & .--item-value {
    font-weight: normal;
    color: #a0a0a0;
  }
`;
