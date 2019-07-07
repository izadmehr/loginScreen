import React from "react";
import renderer from "react-test-renderer";

import LoginForm, { validateEmail } from "../index";

test("PasswordStrengthMeter render week password", () => {
  const tree = renderer.create(<LoginForm />).toJSON();

  expect(tree).toMatchSnapshot();
});

test("validate email: something@something.com", () => {
  expect(validateEmail("something@something.com")).toBe(true);
});
test("validate email: a@b.b", () => {
  expect(validateEmail("a@b.b")).toBe(false);
});
test("validate email: somebody@example", () => {
  expect(validateEmail("somebody@example")).toBe(false);
});
