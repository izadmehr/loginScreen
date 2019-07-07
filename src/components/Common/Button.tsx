import { css } from "styled-components";

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

export const btnPrimary = btn(colors.primary, colors.primaryDark);
