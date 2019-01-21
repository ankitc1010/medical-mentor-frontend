import styled from "styled-components";

const SmallButton = styled.button`
  font-size: 1.5rem;
  font-weight: normal;
  font-family: "Rockwell";
  cursor: pointer;
  padding: 0.8rem 2rem;
  background: ${props =>
    props.type === "engineer" ? props.theme.primary : props.theme.secondary};
  color: ${props =>
    props.type === "engineer" ? props.theme.white : props.theme.primary};
`;

export { SmallButton as default };
