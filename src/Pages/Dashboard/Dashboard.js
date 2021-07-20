import logo from '../../Assets/logo.svg';
import './Dashboard.css';
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Dashboard Screen
        </p>
        <Link to="/employeelist">
          Employee List Screen
        </Link>
      </header>
    </div>
  );
}

export default Dashboard;