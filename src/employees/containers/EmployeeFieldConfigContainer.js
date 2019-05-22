import { connect } from 'react-redux'
import EmployeeFieldConfig from "../components/EmployeeFieldConfig";
import { toggleEmployeeFieldProperty } from "../../store/actions"

const mapStateToProps = (state) => {
    return {
        employeeFields: Object.values(state.employeeFields),
        employeeFieldProperties: Object.values(state.employeeFieldProperties)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFieldProperty: (fieldId, propertyId) => {
            dispatch(toggleEmployeeFieldProperty(fieldId, propertyId))
        }
    }
};


const EmployeeFieldConfigContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeFieldConfig);

export default EmployeeFieldConfigContainer