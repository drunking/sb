import { connect } from 'react-redux'
import EmployeeForm from "../components/EmployeeForm";
import { addEmployee, executeRedirect } from "../../store/actions"
import EmployeePage from "../components/EmployeePage";

const mapStateToProps = (state) => {
    return {
        employeeFields: Object.values(state.employeeFields),
        departments: state.departments,
        employeePositions: state.employeePositions,
        redirectPath: state.redirectPath
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addEmployee: (employee) => {
            dispatch(addEmployee(employee))
        },
        executeRedirect: () => { dispatch(executeRedirect( EmployeePage.baseUrl )) }
    }
};


const EmployeeFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeForm);

export default EmployeeFormContainer