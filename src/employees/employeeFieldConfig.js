import React, { Component } from "react";
import { Table, Form } from "react-bootstrap";

class EmployeeFieldConfig extends Component {

    constructor(props){
        super(props)
        this.state = {
            fieldProperties: [
                { name: "readOnly", description: "Только чтение" },
                { name: "visible", description: "Просмотр" },
            ],
            employeeFields: [
                { name: "sureName",   description: "Фамилия",         readOnly: true, visible: true },
                { name: "firstName",  description: "Имя",             readOnly: false, visible: true },
                { name: "lastName",   description: "Отчество",        readOnly: true, visible: true },
                { name: "birthDate",  description: "Дата рождения",   readOnly: true, visible: false },
                { name: "code",       description: "Табельный номер", readOnly: true, visible: true },
                { name: "position",   description: "Должность",       readOnly: true, visible: true },
                { name: "department", description: "Подразделение",   readOnly: true, visible: true }
            ]
        }
    }

    getTableHeader(){
        return(
            <thead>
            <tr>
                <th>Поле</th>
                { this.state.fieldProperties.map(field => <th>{ field.description }</th> )}
            </tr>
            </thead>
        )
    }

    getTableBody(){
        return(
            <tbody>
            { this.state.employeeFields.map(field =>
                <tr>
                    <td>{ field.description }</td>
                    { this.state.fieldProperties.map(property =>
                    <td>
                        <Form.Check checked={ field[property.name] } />
                    </td>
                    )}
                </tr>
            )}
            </tbody>
        )
    }

    render() {
        return (
            <Form>
                <Table bordered hover size="sm">
                    {this.getTableHeader()}
                    {this.getTableBody()}
                </Table>

            </Form>
            //Свойства, влияющие на отображение таблицы тоже можно принимать как входные параметры конструктора,
            //я просто этим принебрег
        )
    }

}

export default EmployeeFieldConfig