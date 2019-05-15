import React, { Component } from 'react';
import { Container, Nav, Table, Row, Col, Form } from "react-bootstrap";
import EmployeesTable from "./employees/employeesTable"
import EmployeesForm from "./employees/employeeForm"
import EmployeeFieldConfig from "./employees/employeeFieldConfig";
class App extends Component {

    get baseUrl(){ return "/employees" };

    render() {

        return (
            <Container>
                <Nav
                    activeKey={ this.baseUrl }
                    onSelect={selectedKey => alert(`selected ${selectedKey}`)}
                >
                    <Nav.Item>
                        <Nav.Link href={ this.baseUrl } eventKey={ this.baseUrl }>Список сотрудников</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href={ this.baseUrl +  "/add" } eventKey={ this.baseUrl +  "/add" }>Добавить запись</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href={ this.baseUrl +  "/config" } eventKey={ this.baseUrl +  "/config" }>Настройки</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Container>
                    <Row>
                        <Col>
                            <EmployeesTable/>
                        </Col>
                        <Col>
                            <EmployeesForm/>
                        </Col>
                    </Row>
                    <Row>
                        <EmployeeFieldConfig/>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default App;
