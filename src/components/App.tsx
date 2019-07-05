import * as React from "react";
import { hot } from "react-hot-loader";

export interface AppProps {
}

class App extends React.Component<AppProps, undefined> {
    render() {
        return (
            <div className="app">
                <h1>Hello World!</h1>
            </div>
        );
    }
}

declare let module: Record<string, any>;

export default hot(module)(App);