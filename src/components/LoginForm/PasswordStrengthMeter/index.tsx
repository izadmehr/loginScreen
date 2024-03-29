import React from "react";
import { ZXCVBNScore } from "zxcvbn";

import PasswordStrengthMeterContianer, { PasswordLabel } from "./Styles";

interface Props {
  score: ZXCVBNScore;
  showMeterLabel: boolean;
  notSecure: boolean;
}

export function createPasswordLabel(score: ZXCVBNScore): string {
  switch (score) {
    case 0:
      return "Weak";
    case 1:
      return "Weak";
    case 2:
      return "Fair";
    case 3:
      return "Good";
    case 4:
      return "Strong";
    default:
      return "Weak";
  }
}

function PasswordStrengthMeter(props: Props): JSX.Element {
  const { score, showMeterLabel, notSecure } = props;
  const passwordLabel = createPasswordLabel(score);

  return (
    <PasswordStrengthMeterContianer>
      {showMeterLabel && (
        <progress
          className={`password-strength-meter-progress strength-${passwordLabel}`}
          value={score}
          max="4"
        />
      )}
      <br />
      <div className="password-strength-meter-label">
        {showMeterLabel && (
          <>
            <strong>
              Password strength:&nbsp;
              <PasswordLabel notSecure={notSecure}>
                {passwordLabel}
              </PasswordLabel>
            </strong>
          </>
        )}
      </div>
    </PasswordStrengthMeterContianer>
  );
}

export default PasswordStrengthMeter;
