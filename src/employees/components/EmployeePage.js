import React, { Component } from "react"
import { Container, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom"
import { Route } from "react-router-dom";
import EmployeeListContainer from "../containers/EmployeeListContainer";
import EmployeeFormContainer from "../containers/EmployeeFormContainer";
import EmployeeFieldConfigContainer from "../containers/EmployeeFieldConfigContainer";


class EmployeePage extends Component {
    static get baseUrl(){ return "/employee" };
    static get routing(){ return {
        routes: [
            {
                name: "Список сотрудников",
                path: `${ EmployeePage.baseUrl }`,
                pathExact: true,
                component: EmployeeListContainer
            },
            {
                name: "Добавить запись",
                path: `${ EmployeePage.baseUrl }/add`,
                component: EmployeeFormContainer
            },
            {
                name: "Настройки",
                path: `${ EmployeePage.baseUrl }/configuration`,
                component: EmployeeFieldConfigContainer
            }
        ]
    }};

    render() {
        return (
            <Router>
                <Container>
                    <Nav activeKey={ EmployeePage.baseUrl }>
                        {EmployeePage.routing.routes.map( (route, i) =>
                            <Nav.Item key={ i }>
                                <Link className="nav-link" to={ route.path }>{ route.name }</Link>
                            </Nav.Item>
                        )}
                    </Nav>
                    <Container>
                        {EmployeePage.routing.routes.map((route, i) =>
                            <Route
                                exact={ route.pathExact }
                                key={ i }
                                path={ route.path }
                                component={ route.component }
                            />
                        )}
                    </Container>
                </Container>
            </Router>
        )
    }
}

export default EmployeePage