import logo from './logo.svg';
import './App.css';
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Dashboard from './Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Users from './Users';
import Usercreate from './Usercreate';
import UserEdit from './UserEdit';
import { UserProvider } from "./userContext";

function App() {
  return (
    <UserProvider>
      <Router>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar></Topbar>
            <div class="container-fluid">
              <Switch>
              <Route path="/" component={Dashboard} exact={true} />
              <Route path="/user" component={Users} exact={true} />
              <Route path="/user-create" component={Usercreate} exact={true} />
              <Route path="/user-edit/:id" component={UserEdit} exact={true} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
    </UserProvider>
  );
}

export default App;
