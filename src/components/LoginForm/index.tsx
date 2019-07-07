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
function validateEmail(email: string): boolean {
  // eslint-disable-next-line max-len,no-useless-escape
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
}

const App = (): JSX.Element => (
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

        if (passwordResult.score !== 4) {
          errors.password = {
            score: passwordResult.score,
            message: passwordResult.feedback.warning
          };
        }

        return errors;
      }}
      render={({
        handleSubmit,
        form,
        submitting,
        pristine,
        values,
        invalid
      }): JSX.Element => (
        <form onSubmit={handleSubmit}>
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
                <span>{touched && !active ? error : null}</span>
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
                  score={error && error.score}
                  showMeterLabel={touched || active}
                />
                <span>
                  {error && (touched || active) ? error.message : null}
                </span>
              </div>
            )}
          </Field>
          <div className="buttons">
            <button type="submit" disabled={submitting || invalid}>
              Submit
            </button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </form>
      )}
    />
  </Styles>
);

export default App;
