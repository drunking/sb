import React, { Component } from "react";
import { Table, Form } from "react-bootstrap";

class EmployeeFieldConfig extends Component {

    getTableHeader(){
        return(
            <thead>
            <tr>
                <th>Поле</th>
                { this.props.employeeFieldProperties.map(field => <th key={ field.name }>{ field.name }</th> )}
            </tr>
            </thead>
        )
    }

    getTableBody(){
        return(
            <tbody>
            { this.props.employeeFields.map(field =>
                <tr key={ field.id }>
                    <td>{ field.id }</td>
                    { this.props.employeeFieldProperties.map(property =>
                    <td key={ field.id }>
                        <Form.Check
                            onChange={ () => { this.props.toggleFieldProperty(field.id, property.id) } }
                            checked={ field[property.id] }
                        />
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
                    { this.getTableHeader() }
                    { this.getTableBody() }
                </Table>

            </Form>
        )
    }

}

export default EmployeeFieldConfig