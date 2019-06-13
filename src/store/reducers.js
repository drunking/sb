import {
    FIND_EMPLOYEE,
    ADD_EMPLOYEE,
    SET_EMPLOYEE_LIST_SELECTED_EMPLOYEE_ID,
    TOGGLE_EMPLOYEE_FIELD_PROPERTY, EXECUTE_REDIRECT
} from "./actions"
import {Redirect} from "react-router";
import React from "react";

const initialState = {
    employeeFields: {
        sureName:   { id: "sureName",   name: "Фамилия",         visible: true },
        firstName:  { id: "firstName",  name: "Имя",             visible: true },
        lastName:   { id: "lastName",   name: "Отчество",        visible: true },
        birthDate:  { id: "birthDate",  name: "Дата рождения",   visible: true },
        code:       { id: "code",       name: "Табельный номер", visible: true },
        position:   { id: "position",   name: "Должность",       visible: true, dictionary: "employeePositions" },
        department: { id: "department", name: "Подразделение",   visible: true, dictionary: "departments" }
    },
    employeeFieldProperties: {
        visible:  { id: "visible",  name: "Просмотр" }
    },
    employees: {
        1: {
            id: 1,
            sureName: "Немудрый",
            firstName: "Оскар",
            lastName: "Эдуардович",
            birthDate: "22.07.1978",
            code: 1,
            position: "Product manager",
            department: "DP-PM"
        },
        2: {
            id: 2,
            sureName: "Прусачок",
            firstName: "Марио",
            lastName: "Электронович",
            birthDate: "12.01.1988",
            code: 2,
            position: "Developer",
            department: "DP-DEV"
        },
        3: {
            id: 3,
            sureName: "Добробаба",
            firstName: "Лида",
            lastName: "Капитановна",
            birthDate: "16.12.1981",
            code: 3,
            position: "Quality assurance",
            department: "DP-QA"
        },
        4: {
            id: 4,
            sureName: "Убейволк",
            firstName: "Варя",
            lastName: "Адольфовна",
            birthDate: "03.05.1989",
            code: 4,
            position: "Quality control",
            department: "DP-QC"
        }
    },
    employeePositions: [
        "Product manager", "Developer", "Quality assurance", "Quality control"
    ],
    departments: [
        "DP-PM", "DP-DEV", "DP-QA", "DP-QC"
    ],
    employeeListFieldsId: ["sureName", "position"],
    employeeListSelectedEmployeeId: 1,
    redirectPath: null
};

export default function employeeApp(state = initialState, action) {
    switch (action.type) {
        case FIND_EMPLOYEE:
            return Object.assign({}, state.employees[action.employeeId]);
        case ADD_EMPLOYEE:
            if(action.employee.id == null){
                action.employee.id = ++Object.keys(state.employees).length;
            }

            let newEmployee = { [action.employee.id]: action.employee };
            let newEmployees = { employees: Object.assign({}, state.employees, newEmployee) };

            return Object.assign({}, state, newEmployees);
        case SET_EMPLOYEE_LIST_SELECTED_EMPLOYEE_ID:
            return Object.assign({}, state, { employeeListSelectedEmployeeId: action.employeeId });
        case TOGGLE_EMPLOYEE_FIELD_PROPERTY:
            let field = Object.assign({}, state.employeeFields[action.fieldId]);
            field[action.propertyId] = !field[action.propertyId];

            return Object.assign({}, state, { employeeFields: Object.assign({}, state.employeeFields, { [field.id]: field }) })
        case EXECUTE_REDIRECT:
            return Object.assign({}, state, { redirectPath: <Redirect to={ action.path }/> });
        default:
            return state;

    }
}