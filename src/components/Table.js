import React from "react";
import "./EmployeerList.js"

class Table extends React.Component {
    render() {
        const data = this.employeeList.map((item, i)=> {
            return (
                <tr key={i}>
                    <td>{item}</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                </tr>
            );
        });
        return (
            <table><tbody>{ data }</tbody></table>

        );


    }
}

export default Table;