import { connect } from 'react-redux'
import EmployeeForm from "../components/EmployeeForm";
import { addEmployee } from "../../store/actions"

const mapStateToProps = (state) => {
    return {
        employeeFields: Object.values(state.employeeFields)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addEmployee: (employee) => {
            dispatch(addEmployee(employee))
        }
    }
};


const EmployeeFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeForm);

export default EmployeeFormContainer