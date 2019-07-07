import styled, { css } from "styled-components";

import { colors } from "../../utlis/constants";

const btn = (light, dark) => css`
  height: 2.5em;
  white-space: nowrap;
  display: inline-block;
  border-radius: 2px;
  padding: 5px 1em;
  font-size: 1rem;
  color: white;
  &:visited {
    color: white;
  }
  background-color: ${light};
  border: 1px solid ${dark};
  &:hover {
    background-image: linear-gradient(${light}, ${dark});
    &[disabled] {
      background-image: linear-gradient(${light}, ${dark});
    }
  }
  &:visited {
    color: black;
  }
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const btnPrimary = btn(colors.primary, colors.primaryDark);

export default styled.div`
  font-family: sans-serif;
  background-color: #f0f4f7;
  height: 100vh;
  form {
    width: 32rem;
    margin: auto;
    padding: 3rem 2rem;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;

    .logo {
      width: 9rem;
      margin: 0 auto;
      display: block;
    }
    @media (max-width: 500px) {
      width: 100%;
      margin: auto;
      height: 100%;
    }

    & > div {
      line-height: 2em;
      margin: 5px;
      & > label {
        color: #333;
        font-size: 1rem;
        line-height: 1.5;
        & > input {
          display: block;
          width: 95%;
          padding: 0.375rem 0.75rem;
          font-size: 1rem;
          line-height: 1.5;
          color: #495057;
          background-color: #e8f0fe;
          background-clip: padding-box;
          border: 1px solid #ced4da;
          border-radius: 0.25rem;
          transition: border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
          :focus {
            border: 1px solid ${colors.primary};
            outline-width: 0;
            background-color: #ffffff;
          }
        }
      }
      & > .error {
        color: #d0011b;
        margin-top: 0.5em;
        border-radius: 3px;
        min-height: 1.25rem;
        line-height: 1.25rem;
      }

      & > div {
        & > label {
          display: block;
          & > input {
            margin-right: 3px;
          }
        }
      }
    }

    button {
      &[type="submit"] {
        ${btnPrimary};
      }
      width: 100%;
    }
  }
`;
