import React, { Component } from "react"
import { Container, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom"
import { Route } from "react-router-dom";
import EmployeeListContainer from "../containers/EmployeeListContainer";
import EmployeeFormContainer from "../containers/EmployeeFormContainer";
import EmployeeFieldConfigContainer from "../containers/EmployeeFieldConfigContainer";


class EmployeePage extends Component {
    get baseUrl() { return "/employee" };
    get routing(){ return {
        routes: [
            {
                name: "Список сотрудников",
                path: `${ this.baseUrl }`,
                pathExact: true,
                component: EmployeeListContainer
            },
            {
                name: "Добавить запись",
                path: `${ this.baseUrl }/add`,
                component: EmployeeFormContainer,
                props: { employee:{}, formEditMode: true }
            },
            {
                name: "Настройки",
                path: `${ this.baseUrl }/configuration`,
                component: EmployeeFieldConfigContainer
            }
        ]
    }};

    render() {
        return (
            <Router>
                <Container>
                    <Nav activeKey={ this.baseUrl }>
                        {this.routing.routes.map( (route, i) =>
                            <Nav.Item key={ i }>
                                <Link className="nav-link" to={ route.path }>{ route.name }</Link>
                            </Nav.Item>
                        )}
                    </Nav>
                    <Container>
                        {this.routing.routes.map((route, i) =>
                            <Route
                                exact={ route.pathExact }
                                key={ i }
                                path={ route.path }
                                render={ () => (
                                    <route.component { ...route.props } />
                                )}
                            />
                        )}
                    </Container>
                </Container>
            </Router>
        )
    }
}

export default EmployeePage