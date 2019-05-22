import React, { Component } from 'react';
import { Table, Row, Col } from "react-bootstrap";
import EmployeeFormContainer from "../containers/EmployeeFormContainer";

class EmployeeList extends Component {

    getTableHeader(){
        return (
            <thead>
                <tr>{ this.props.employeeFields.map(field =>
                    <th key={ field.id }>{ field.name }</th>
                )}
                </tr>
            </thead>
        )
    }

    getTableBody(){
        return(
            <tbody className="table-hover">
                { this.props.employees.map(employee =>
                    <tr key={ employee.id }
                        onClick={ () => { this.props.setSelectedEmployeeId(employee.id) } }
                    >
                        { this.props.employeeFields.map(field =>
                            <td key={ field.id }>{ employee[field.id] }</td>
                    )}
                    </tr>
                )}
            </tbody>
        )
    }

    render() {
        return (
            <Row>
                <Col>
                    <Table bordered hover size="sm">
                        {this.getTableHeader()}
                        {this.getTableBody()}
                    </Table>
                </Col>
                <Col>
                    <EmployeeFormContainer formEditMode={ false } employee={ this.props.selectedEmployee }/>
                </Col>
            </Row>
        )
    }

}

export default EmployeeList