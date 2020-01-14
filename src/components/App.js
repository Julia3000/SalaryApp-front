import React from "react";
import Menu from "./Menu";
import Clock from "./Clock";
import Toggle from "./Toggle";
import EmployeeList from "./EmployeeList";
import NameForm from "./NameForm";
import Calculator from "./Calculator";
import SimpleTable from "./Table";

class App extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <Clock />
                <Toggle />
                <NameForm />
                <Calculator />
                <EmployeeList />
            </div>
        );
    }
}

export default App;