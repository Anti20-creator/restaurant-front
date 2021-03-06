import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Register from './components/Register';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';

function App() {
  return (
    <Router>
      <div>
        {/*<nav>
            <span>Restaurant</span>

            <div className="links">
                <span>
                  <Link to="/">Home</Link>
                </span>
                <span>
                  <Link to="/register">Register</Link>
                </span>
            </div>
        </nav>*/}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
            <div></div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
