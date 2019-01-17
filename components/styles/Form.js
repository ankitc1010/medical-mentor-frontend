import styled, { keyframes } from "styled-components";

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const Form = styled.form`
  padding: 2rem;
  text-align: left;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  label {
    display: block;
    margin-bottom: 1rem;
    span {
      font-weight: 700;
      margin-left: 2rem;
      font-size: 0.8rem;
      display: block;
      margin-top: -1.8rem;
      transition: all 0.3s;
    }
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 1.5rem 2rem;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    border-radius: 2px;
    border: none;
    color: inherit;
    background: rgba(256, 256, 256, 0.5);
    border-bottom: 1px solid black;
    &:focus {
      outline: 0;
      box-shadow: 0 1rem 2rem rgba(black, 0.1);
      border-bottom: 1px solid green;
    }
    &:focus:invalid {
      border-bottom: 2px solid red;
    }
    &::-webkit-input-placeholder {
      color: grey;
    }
    &:placeholder-shown + span {
      opacity: 0;
      visibility: hidden;
    }
  }
  button,
  input[type="submit"] {
    width: auto;
    background: red;
    color: white;
    border: 0;
    font-size: 2rem;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: inherit;
    box-shadow: 0 3px 15px 0 rgba(247, 123, 155, 0.71);
    font-weight: 700;
    float: right;
    padding: 0.5rem 1.2rem;
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 5px;
      content: "";
      display: block;
      background-image: linear-gradient(
        to right,
        ${props => props.theme.secondary} 0%,
        ${props => props.theme.primary} 50%,
        ${props => props.theme.secondary} 100%
      );
    }
    &[aria-busy="true"]::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

const BackButton = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  cursor: pointer;
  > svg {
    width: 3rem !important;
    height: 3rem;
  }
`;

export default Form;
export { BackButton };
