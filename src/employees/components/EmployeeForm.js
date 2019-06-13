import React, { Component } from "react"
import { Col, Row, Form } from "react-bootstrap";
import { Formik } from "formik";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

class EmployeeForm extends Component {

    constructor(props){
        super(props);
        this.state = { redirectOccurred: false };
        this.executeRedirect = this.executeRedirect.bind(this)
    }

    getFieldOptions(dictionary){
        return(
            dictionary.map(item =>
                <option key={ item }>{ item }</option>
            )
        )
    }

    executeRedirect(){
        this.setState({ redirectOccurred: true });
        this.props.executeRedirect();
    }

    render() {
        let formEditMode = this.props.formEditMode;
        return (
            <Formik
                initialValues={ this.props.employee }
                enableReinitialize={ true }
                onSubmit={(employee, { resetForm }) => {
                    this.props.addEmployee(employee);
                    resetForm();
                }}
                render={ ({ values, handleChange, submitForm, handleSubmit }) => {
                    return (
                        <Form
                            onSubmit={ handleSubmit }
                        >   {this.props.employeeFields.map(field => {
                            let fieldVisible = formEditMode || field.visible;
                            let fieldReadOnly = !formEditMode;
                            let showDictionary = formEditMode && field.dictionary

                            if (fieldVisible) {
                                const controlId = "employeeForm" + field.id.charAt(0).toUpperCase() + field.id.substring(1) + "Control";
                                const fieldValue = values[field.id] || "";
                                return (
                                    <Form.Group
                                        as={ Row }
                                        controlId={ controlId }
                                        key={ controlId }
                                    >
                                        <Form.Label column>{ field.name }</Form.Label>
                                        <Col>
                                            <Form.Control
                                                name={ field.id }
                                                plaintext={ fieldReadOnly }
                                                readOnly={ fieldReadOnly }
                                                value={ fieldValue }
                                                onChange={ handleChange }
                                                as={ showDictionary ? "select" : "input" }
                                            >
                                                { showDictionary ? this.getFieldOptions(this.props[field.dictionary]) : null }
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                )
                            }
                        })}
                        { formEditMode ?
                            (<ButtonGroup>
                                <Button onClick={ submitForm } type="button">
                                    Сохранить и добавить еще
                                </Button>
                                <Button onClick={() => { submitForm().then(() => { this.executeRedirect() })}}
                                        type="button">
                                    Сохранить и вернуться в список
                                </Button>
                                { this.state.redirectOccurred ? this.props.redirectPath : null }
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

EmployeeForm.defaultProps = { employee:{}, formEditMode: true };

export default EmployeeForm