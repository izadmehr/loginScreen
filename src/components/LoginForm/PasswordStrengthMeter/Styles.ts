import styled from "styled-components";

import { colors } from "../../../utlis/constants";

export default styled.div`
  text-align: left;

  .password-strength-meter-progress {
    -webkit-appearance: none;
    appearance: none;
    width: 250px;
    height: 8px;
  }

  .password-strength-meter-progress::-webkit-progress-bar {
    background-color: #eee;
    border-radius: 3px;
  }

  .password-strength-meter-label {
    font-size: 14px;
  }

  .password-strength-meter-progress::-webkit-progress-value {
    border-radius: 2px;
    background-size: 35px 20px, 100% 100%, 100% 100%;
  }

  .strength-Weak::-webkit-progress-value {
    background-color: #f25f5c;
  }
  .strength-Fair::-webkit-progress-value {
    background-color: #ffe066;
  }
  .strength-Good::-webkit-progress-value {
    background-color: #247ba0;
  }
  .strength-Strong::-webkit-progress-value {
    background-color: #70c1b3;
  }
`;

export const PasswordLabel = styled.p`
  color: ${({ notSecure }: { notSecure: boolean }) =>
    notSecure ? colors.error : "black"};
  display: inline-block;
`;
