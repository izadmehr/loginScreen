import { hot } from "react-hot-loader/root";
import React from "react";
import styled from "styled-components";

import LoginForm from "./LoginForm";

function App(): JSX.Element {
  return (
    <Container className="app">
      <LoginForm />
    </Container>
  );
}

const Container = styled.div`
  margin: -8px;
`;
export default hot(App);
