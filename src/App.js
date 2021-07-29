import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';
import EmployeeList from './Pages/EmployeeList/EmployeeList';
import Applications from './Pages/Applications/Applications';
import Screenshots from './Pages/Screenshots/Screenshots';
import Files from './Pages/Files/Files';
import Network from './Pages/Network/Network';

function App() {
  return (
    <>
      <HashRouter>
            <Switch>
                <Route path="/" exact render={ () => {
                    return (
                        <Redirect to="/dashboard"/>
                    );
                }} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/employeelist" component={EmployeeList} />
                <Route path="/applications" component={Applications} />
                <Route path="/screenshots" component={Screenshots} />
                <Route path="/files" component={Files} />
                <Route path="/network" component={Network} />
            </Switch>
      </HashRouter>
    </>
  );
}

export default App;
