import styled from "styled-components";

const SmallButton = styled.button`
  font-size: 1.5rem;
  font-weight: normal;
  font-family: "Rockwell";
  padding: 0.8rem 2rem;
  background: ${props => props.theme.secondary};
  padding-top: 1.4rem;
  color: ${props => props.theme.primary};
`;

export { SmallButton as default };
