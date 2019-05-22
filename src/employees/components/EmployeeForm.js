import React, { Component } from "react"
import { Col, Row, Form } from "react-bootstrap";
import { Formik } from "formik";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {Redirect} from "react-router";

class EmployeeForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            redirectToEmployeeList: false
        }
    }

    render() {
        let formEditMode = this.props.formEditMode;
        return (
            <Formik
                initialValues={ this.props.employee }
                enableReinitialize={ true }
                onSubmit={(employee, actions) => {
                    console.log(actions)
                    this.props.addEmployee(employee)
                }}
                render={ ({values, handleChange, handleSubmit}) => {
                    return (
                        <Form
                            onSubmit={ handleSubmit }
                        >   {!this.state.redirectToEmployeeList ? null : <Redirect to={"/employee"}/> }
                            {this.props.employeeFields.map(field => {
                            let fieldVisible = formEditMode || field.visible;
                            let fieldReadOnly = !formEditMode;

                            if (fieldVisible) {
                                const controlId = "employeeForm" + field.id.charAt(0).toUpperCase() + field.id.substring(1) + "Control";
                                const fieldValue = values[field.id] || "";
                                return (
                                    <Form.Group
                                        as={Row}
                                        controlId={controlId}
                                        key={controlId}
                                    >
                                        <Form.Label column>{field.name}</Form.Label>
                                        <Col>
                                            <Form.Control
                                                name={field.id}
                                                plaintext={fieldReadOnly}
                                                readOnly={fieldReadOnly}
                                                value={fieldValue}
                                                onChange={handleChange}
                                            />
                                        </Col>
                                    </Form.Group>
                                )
                            }
                        })}
                        {formEditMode ?
                            (<ButtonGroup>
                                <Button type="submit">Сохранить и добавить еще</Button>
                                <Button type="submit">Сохранить и вернуться в список</Button>
                            </ButtonGroup>
                            ) : null
                        }
                        </Form>
                    )
                }}
            />
        )
    }
}

export default EmployeeForm