import React from "react";

class EmployeeList extends React.Component {

    employeeList = ['Ivanov','Petrov', 'Sidorov', 'Orlov'];

    render() {

    const data =
        this.employeeList.map((item, i)=>
    {
        return (

            <tr key={i}>
                <td>{item}</td>
                <td>78</td>
            </tr>

        );
    });
    return (
            <table><tbody>{ data }</tbody></table>
    );
    }
}
export default EmployeeList;