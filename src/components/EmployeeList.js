import React from "react";

class EmployeeList extends React.Component {

    employeeList = [
        {
            'firstName' : 'Julia',
            'lastName' : 'Petrova',
            'middleName' : 'Sergeevna',
            'birthDate' : '24.11.1995',
            'gender' : 'Woman',
            'passportNumber' : 'BT 203216',
            'email' : 'julianna24-95@mail.ru'
        },
        {
            'firstName' :'Oleg',
            'lastName' :'Ivanov',
            'middleName' : 'Petrovich',
            'birthDate' : '13.06.1998',
            'gender' : 'Man',
            'passportNumber' : '65454436778',
            'email' : 'Oleg4325@mail.ru'
        },
        { 'firstName' :'Victor',
            'lastName' :'Petrov',
            'middleName' : 'Anatolevich',
            'birthDate' : '31.03.1990',
            'gender' : 'Man',
            'passportNumber' : '909995643',
            'email' : 'VictorVx@yandex.com'
        }
    ];

    render() {
        return (
            <table>
                <h3>Список</h3>
                <tr>
                    <th>Surname</th>
                    <th>Name</th>
                    <th>Middlename</th>
                    <th>Birthday</th>
                    <th>Gender</th>
                    <th>Passport Number</th>
                    <th>E-mail</th>

                </tr>
                {
                    this.employeeList.map((item, i)=>
                    {
                        return (
                            <tbody>
                                <tr key={i}>
                                    <td>{item.lastName}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.middleName}</td>
                                    <td>{item.birthDate}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.passportNumber}</td>
                                    <td>{item.email}</td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
        );
    }
}
export default EmployeeList;