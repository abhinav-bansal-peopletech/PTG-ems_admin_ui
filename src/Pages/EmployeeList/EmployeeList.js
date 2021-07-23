import './EmployeeList.css';
import EmployeeListTableComponent from '../../Components/EmployeeListComponent/EmployeeListTableComponent';
import EmployeeListNavbar from '../../Components/EmployeeListComponent/EmployeeListNavbar';
import EmployeeListSearch from '../../Components/EmployeeListComponent/EmployeeListSearch';

function EmployeeList() {
  return (
    <>
        <EmployeeListNavbar/>
        <EmployeeListSearch/>
        <EmployeeListTableComponent/>
    </>
  );
}

export default EmployeeList;