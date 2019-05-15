import React, { Component } from 'react';
import {Table} from "react-bootstrap";

class EmployeesTable extends Component {

    constructor(props){
        super(props);
        this.state = {
            employeeFields: [
                { name: "sureName", description: "Фамилия" },
                { name: "position", description: "Должность" }
            ],
            employees: [
                {
                    id: 1,
                    sureName: "Иванов",
                    position: "PM"
                },
                {
                    id: 2,
                    sureName: "Петрова",
                    position: "Developer"
                },
                {
                    id: 3,
                    sureName: "Сидоров",
                    position: "QA"
                }
            ]
        }
    }

    getTableHeader(){
        return(
            <thead>
                <tr>{ this.state.employeeFields.map(field =>
                    <th>{ field.description }</th>
                )}</tr>
            </thead>
        )
    }

    getTableBody(){
        return(
            <tbody>
                { this.state.employees.map(employee =>
                    <tr>{ this.state.employeeFields.map(field =>
                        <td>{ employee[field.name] }</td>
                    )}</tr>
                )}
            </tbody>
        )
    }

    render() {
        return (
            //Свойства, влияющие на отображение таблицы тоже можно принимать как входные параметры конструктора,
            //я просто этим принебрег
            <Table bordered hover size="sm">
                {this.getTableHeader()}
                {this.getTableBody()}
            </Table>
        )
    }

}

export default EmployeesTable