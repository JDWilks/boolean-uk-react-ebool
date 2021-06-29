import styled from "styled-components";

export const Button = styled.button`
  color: white;
  font-size: 1rem;
  background-color: crimson;
  border: solid 1px crimson;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 10px;

  ${(props) =>
    props.big
      ? `
    font-size: 2rem;
    padding: 20px 30px;
  `
      : ""}

  ${(props) =>
    props.tiny
      ? `
    font-size: 0.7rem;
    padding: 5px 10px;
    `
      : ""}

    ${(props) =>
    props.secondary
      ? `
      background-color: white;
      color: crimson;
    `
      : ""}
`;

export const TomatoButton = styled(Button)`
  background-color: green;
  border-color: yellow;
  border-radius: 20px;
`;
