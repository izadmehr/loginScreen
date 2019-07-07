import styled, { css } from "styled-components";

import { colors } from "../../utlis/constants";

const btn = (light, dark) => css`
  white-space: nowrap;
  display: inline-block;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 16px;
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

const btnDefault = css`
  ${btn("#ffffff", "#d5d5d5")} color: #555;
`;

const btnPrimary = btn(colors.primary, colors.primaryDark);

export default styled.div`
  font-family: sans-serif;

  form {
    width: 32rem;
    margin: 1em auto;
    border: 1px solid #ccc;
    padding: 1.25rem;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

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
          background-color: #fff;
          background-clip: padding-box;
          border: 1px solid #ced4da;
          border-radius: 0.25rem;
          transition: border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
        }
      }
      & > span {
        color: #800;
        font-weight: bold;
        line-height: 1.5rem;
        margin-left: 10px;
      }

      & > div {
        margin-left: 1rem;
        & > label {
          display: block;
          & > input {
            margin-right: 3px;
          }
        }
      }
    }
    & > .buttons {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      margin-top: 1rem;
    }
    button {
      margin: 0 0.5rem;
      &[type="submit"] {
        ${btnPrimary};
      }
      &[type="button"] {
        ${btnDefault};
      }
    }
    pre {
      border: 1px solid #ccc;
      background: rgba(0, 0, 0, 0.1);
      box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
      padding: 20px;
    }
  }
`;
