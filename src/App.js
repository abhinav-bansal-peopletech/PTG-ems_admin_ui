import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';
import EmployeeList from './Pages/EmployeeList/EmployeeList';
import Applications from './Pages/Applications/Applications';
import Screenshots from './Pages/Screenshots/Screenshots';
import Files from './Pages/Files/Files';
import Network from './Pages/Network/Network';
import Cliboard from './Pages/Clipboard/Cliboard';
import Session from './Pages/Session/Session';
import SideMenuComponent from './Components/DashboardComponent/SideMenuComponent';
import HeaderComponent from './Components/DashboardComponent/HeaderComponent';
import Login from './Pages/Login/Login';
import './Pages/Dashboard/Dashboard.css'

function App() {
  return (
    <>
          <HashRouter>
            <Switch>
                <Route path="/" exact render={ () => {
                    return (
                        <Redirect to="/login"/>
                    );
                }} /> 
                <Route path="/login" component={Login}/>
                <Route path="/employeelist" component={EmployeeList} />
                <>
                  <SideMenuComponent/>
                  <HeaderComponent/>
                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/applications" component={Applications} />
                  <Route path="/screenshots" component={Screenshots} />
                  <Route path="/files" component={Files} />
                  <Route path="/network" component={Network} />
                  <Route path="/clipboard" component={Cliboard}/>
                  <Route path="/Session" component={Session}/>
                </>
            </Switch>
          </HashRouter> 
    </>
  );
}

export default App;
