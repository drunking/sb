export const FIND_EMPLOYEE = "FIND_EMPLOYEE";
export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const SET_EMPLOYEE_LIST_SELECTED_EMPLOYEE_ID = "SET_EMPLOYEE_LIST_SELECTED_EMPLOYEE_ID";
export const TOGGLE_EMPLOYEE_FIELD_PROPERTY = "TOGGLE_EMPLOYEE_FIELD_PROPERTY";

export function findEmployee(employeeId) {
    return { type: FIND_EMPLOYEE, employeeId }
}

export function addEmployee(employee) {
    return { type: ADD_EMPLOYEE, employee }
}

export function setEmployeeListSelectedEmployeeId(employeeId) {
    return { type: SET_EMPLOYEE_LIST_SELECTED_EMPLOYEE_ID, employeeId }
}

export function toggleEmployeeFieldProperty(fieldId, propertyId) {
    return { type: TOGGLE_EMPLOYEE_FIELD_PROPERTY, fieldId, propertyId }
}

