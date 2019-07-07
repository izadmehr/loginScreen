import React from "react";
import renderer from "react-test-renderer";

import App from "../App";

test("PasswordStrengthMeter render week password", () => {
  const tree = renderer.create(<App />).toJSON();

  expect(tree).toMatchSnapshot();
});
