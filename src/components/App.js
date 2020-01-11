import React from "react";
import Menu from "./Menu";
import Clock from "./Clock";
import Toggle from "./Toggle";

class App extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <Clock />
                <Toggle />
            </div>
        );
    }
}

export default App;