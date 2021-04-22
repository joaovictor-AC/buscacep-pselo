import { Route, Router, Switch } from "react-router";
import PrivateRoute from "./core/utils/PrivateRoute";
import history from "./core/utils/history";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Form from "./pages/Home";
import NotFound from "./pages/NotFound/NotFound";
import Navbar from "./core/components/Navbar";

function Routes () {
    return (
        <Router history={history}>
            <Navbar/>
            <Switch>
                <PrivateRoute path="/" exact>
                    <Form />
                </PrivateRoute>
                <PrivateRoute path="/searches">
                    <h1>Searche</h1>
                </PrivateRoute>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <PrivateRoute>
                    <NotFound/>
                </PrivateRoute>
            </Switch>
        </Router>
    )
} 
export default Routes;