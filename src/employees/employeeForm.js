import React, { Component } from "react"
import { Col, Row, Form } from "react-bootstrap";

class EmployeeForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            formEditMode: false,
            employeeFields: [
                { name: "sureName",   description: "Фамилия",         readOnly: true, visible: true },
                { name: "firstName",  description: "Имя",             readOnly: true, visible: true },
                { name: "lastName",   description: "Отчество",        readOnly: true, visible: true },
                { name: "birthDate",  description: "Дата рождения",   readOnly: true, visible: true },
                { name: "code",       description: "Табельный номер", readOnly: true, visible: true },
                { name: "position",   description: "Должность",       readOnly: true, visible: true },
                { name: "department", description: "Подразделение",   readOnly: true, visible: true }
            ],
            employee: {
                sureName:   "Куралесов",
                firstName:  "Василий",
                lastName:   "Валерьевич",
                birthDate:  "12.08.1978",
                code:       15532,
                position:   "QA",
                department: "DP-QA"
            }
        }
    }

    render() {
        let formEditMode = this.state.formEditMode;
        return (
            <Form>{this.state.employeeFields.map(field => {
                if (formEditMode || field.visible) {
                    return (
                        <Form.Group as={Row} controlId={"employeeForm" + field.name.charAt(0).toUpperCase() + field.name.substring(1) + "Control"}>
                            <Form.Label column >{ field.description }</Form.Label>
                            <Col><Form.Control plaintext={ field.readOnly } readOnly={ field.readOnly } value={ this.state.employee[field.name] } /></Col>
                        </Form.Group>
                    )
                }})}
            </Form>
        )
    }

}

export default EmployeeForm