import './App.css';
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';
import EmployeeList from './Pages/EmployeeList/EmployeeList';

function App() {
  return (
    <HashRouter>
            <Switch>
                <Route path="/" exact render={ () => {
                    return (
                        <Redirect to="/dashboard"/>
                    );
                }} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/employeelist" component={EmployeeList} />
            </Switch>
    </HashRouter>
  );
}

export default App;
