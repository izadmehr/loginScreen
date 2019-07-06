import * as React from "react";
import { hot } from "react-hot-loader";

import LoginForm from './LoginForm';

export interface AppProps {
}

class App extends React.Component<AppProps, undefined> {
    render() {
        return (
            <div className="app">
                <LoginForm />
            </div>
        );
    }
}

declare let module: Record<string, any>;

export default hot(module)(App);