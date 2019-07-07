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

test("createPasswordLabel for: 0", () => {
  expect(createPasswordLabel(0)).toBe("Weak");
});

test("createPasswordLabel for : 1", () => {
  expect(createPasswordLabel(1)).toBe("Weak");
});
test("createPasswordLabel for : 2", () => {
  expect(createPasswordLabel(2)).toBe("Fair");
});
test("createPasswordLabel for : 3", () => {
  expect(createPasswordLabel(3)).toBe("Good");
});
test("createPasswordLabel for : 4", () => {
  expect(createPasswordLabel(4)).toBe("Strong");
});
