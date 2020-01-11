import React from "react";
import Menu from "./Menu";
import Clock from "./Clock";
import Toggle from "./Toggle";
import EmployeeList from "./EmployeeList";
import NameForm from "./NameForm";

class App extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <Clock />
                <Toggle />
                <NameForm />
                <EmployeeList />
            </div>
        );
    }
}

export default App;