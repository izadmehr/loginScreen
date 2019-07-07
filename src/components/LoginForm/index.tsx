import React from "react";
import { Form, Field } from "react-final-form";
import zxcvbn, { ZXCVBNScore } from "zxcvbn";

import Styles from "./Styles";
import PasswordStrengthMeter from "./PasswordStrengthMeter";

interface Values {
  email: string;
  password: string;
}

interface Errors {
  email?: string;
  password?: {
    score: ZXCVBNScore;
    message: string;
  };
}
export function validateEmail(email: string): boolean {
  // eslint-disable-next-line max-len,no-useless-escape
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const projectALogo = require("../../assets/img/projecta-logo.png");

let passwordScore: ZXCVBNScore;
const LoginForm = (): JSX.Element => (
  <Styles>
    <Form
      onSubmit={(values: Values) => alert(JSON.stringify(values, null, 2))}
      initialValues={{ email: "", password: "" }}
      validate={(values: Values): Errors => {
        const errors: Errors = {};

        if (!validateEmail(values.email)) {
          errors.email = "Wrong email address";
        }

        const passwordResult = zxcvbn(values.password || "");

        passwordScore = passwordResult.score;

        if (passwordResult.score <= 2) {
          errors.password = {
            score: passwordResult.score,
            message: passwordResult.feedback.warning
          };
        }

        return errors;
      }}
      render={({ handleSubmit, submitting }): JSX.Element => (
        <form onSubmit={handleSubmit}>
          <img className="logo" src={projectALogo} alt="Project A logo" />
          <Field name="email">
            {({ input, meta: { active, error, touched } }): JSX.Element => (
              <div>
                <label htmlFor="email">
                  Email:
                  <input
                    {...input}
                    type="text"
                    placeholder="example@test.com"
                    id="email"
                  />
                </label>
                <div className="error">{touched && !active ? error : null}</div>
              </div>
            )}
          </Field>

          <Field name="password">
            {({ input, meta: { active, error, touched } }): JSX.Element => (
              <div>
                <label htmlFor="password">
                  Password:
                  <input
                    {...input}
                    type="text"
                    placeholder="********"
                    id="password"
                  />
                </label>
                <PasswordStrengthMeter
                  score={passwordScore}
                  showMeterLabel={touched || active}
                  notSecure={!!error}
                />
                <div className="error">
                  {error && (touched || active) ? error.message : null}
                </div>
              </div>
            )}
          </Field>
          <button type="submit" disabled={submitting}>
            Submit
          </button>
        </form>
      )}
    />
  </Styles>
);

export default LoginForm;
