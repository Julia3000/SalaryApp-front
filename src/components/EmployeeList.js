import React from "react";

class EmployeeList extends React.Component {

    employeeList = ['Ivanov', 'Petrov', 'Sidorov', 'Orlov'];

    render() {
        const listItems = this.employeeList.map((employee, index)=><li key={index}><a href={employee}>{employee}</a></li>);
        return (
            <div>
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}

export default EmployeeList;