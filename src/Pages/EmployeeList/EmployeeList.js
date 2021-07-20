import logo from '../../Assets/logo.svg';
import './EmployeeList.css';
import { Link } from "react-router-dom";

function EmployeeList() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Employee List Screen
        </p>
        <Link to="/dashboard">
          Dashboard Screen
        </Link>
      </header>
    </div>
  );
}

export default EmployeeList;