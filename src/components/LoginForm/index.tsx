import * as React from "react";
import { Form, Field } from "react-final-form";

import Styles from "./Styles";
import ErrorWithDelay from "./ErrorWithDelay";

interface Values {
  email: string;
  password: string;
}

const App = (): JSX.Element => (
  <Styles>
    <Form
      onSubmit={() => {}}
      initialValues={{ email: "", password: "" }}
      validate={(values: Values) => {
        const errors: Values = {
          email: "",
          password: ""
        };

        if (!values.email) {
          errors.email = "Required";
        }

        if (!values.password) {
          errors.password = "Required";
        }

        return errors;
      }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Field name="email">
            {({ input }) => (
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
                <ErrorWithDelay name="email" delay={1000}>
                  {error => <span>{error}</span>}
                </ErrorWithDelay>
              </div>
            )}
          </Field>

          <Field name="password">
            {({ input }) => (
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
                <ErrorWithDelay name="password" delay={1000}>
                  {error => <span>{error}</span>}
                </ErrorWithDelay>
              </div>
            )}
          </Field>
          <div className="buttons">
            <button type="submit" disabled={submitting}>
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
