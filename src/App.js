import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import Navigation from "./pages/Shared/Navigation/Navigation";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Navigation></Navigation>
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Navigation></Navigation>
            <Register></Register>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
