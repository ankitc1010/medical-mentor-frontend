import styled, { css } from "styled-components";

const MentorHeading = styled.div`
  text-align: center;
  margin-top: 4rem;
  h3 {
    font-weight: normal;
    display: inline-block;
    position: relative;
    text-align: left;
    margin: 0 auto;
    background: ${props =>
      props.type === "engineer" ? props.theme.primary : props.theme.secondary};
    color: ${props =>
      props.type === "engineer" ? props.theme.white : props.theme.primary};
    padding: 0.8rem 2rem;
    line-height: 1;
    font-size: 1.5rem;
    font-family: "Futura";
    padding-top: 1.4rem;
    z-index: 1;
    li {
      margin: 0.5rem 0;
    }
    > div {
      width: 96%;
      height: 100%;
      height: inherit;
      border: 1px solid black;
      position: absolute;
      top: 0px;
      bottom: 0;
      left: 1rem;
      right: -4rem;
      transform: rotate(
        ${props => (props.type === "engineer" ? "-2" : "2")}deg
      );
      z-index: 1;
    }
    > img {
      position: absolute;
      width: 8rem;
      z-index: 0;
      ${props =>
        props.type === "engineer"
          ? css`
              right: 2rem;
              top: -4rem;
            `
          : css`
              top: -4rem;
            `}
    }
  }
`;

export { MentorHeading as default };
