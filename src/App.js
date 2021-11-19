import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import "./App.css";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import Navigation from "./pages/Shared/Navigation/Navigation";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Shipping from "./pages/Shipping/Shipping";
import AllProducts from "./pages/AllProducts/AllProducts";
import Footer from "./pages/Shared/Footer/Footer";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Navigation></Navigation>
              <Login></Login>
              <Footer></Footer>
            </Route>
            <Route exact path="/register">
              <Navigation></Navigation>
              <Register></Register>
              <Footer></Footer>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/bookProduct/:bookId">
              <Navigation></Navigation>
              <Shipping></Shipping>
              <Footer></Footer>
            </PrivateRoute>
            <Route path="/products">
              <Navigation></Navigation>
              <AllProducts></AllProducts>
              <Footer></Footer>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
