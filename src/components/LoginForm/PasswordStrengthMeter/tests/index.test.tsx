import React from "react";
import renderer from "react-test-renderer";

import PasswordStrengthMeter, { createPasswordLabel } from "../index";

test("PasswordStrengthMeter render week password", () => {
  const tree = renderer
    .create(<PasswordStrengthMeter score={1} showMeterLabel notSecure />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

test("PasswordStrengthMeter render strong password", () => {
  const tree = renderer
    .create(
      <PasswordStrengthMeter score={4} showMeterLabel notSecure={false} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

test("createPasswordLabel result", async () => {
  expect(createPasswordLabel(0)).toBe("Weak");
  expect(createPasswordLabel(1)).toBe("Weak");
  expect(createPasswordLabel(2)).toBe("Fair");
  expect(createPasswordLabel(3)).toBe("Good");
  expect(createPasswordLabel(4)).toBe("Strong");
});
