import React from "react";
import Menu from "./Menu";
import Clock from "./Clock";
import Toggle from "./Toggle";
import EmployeeList from "./EmployeeList";

class App extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <Clock />
                <Toggle />
                <EmployeeList />
            </div>
        );
    }
}

export default App;