import { connect } from 'react-redux'
import EmployeeList from "../components/EmployeeList";
import { setEmployeeListSelectedEmployeeId } from "../../store/actions"

const mapStateToProps = (state) => {
    return {
        employeeFields: state.employeeListFieldsId.map(fieldId => Object.assign({}, state.employeeFields[fieldId])),
        employees: Object.values(state.employees),
        selectedEmployee: Object.assign({}, state.employees[state.employeeListSelectedEmployeeId])
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedEmployeeId: (employeeId) => {
            dispatch(setEmployeeListSelectedEmployeeId(employeeId))
        }
    }
};


const EmployeeListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeList);

export default EmployeeListContainer