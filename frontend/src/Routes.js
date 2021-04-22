import { Route, Router, Switch } from "react-router";
import NotFound from "./core/components/NotFound";
import PrivateRoute from "./core/components/PrivateRoute";
import history from "./core/utils/history";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Form from "./pages/Home";

function Routes () {
    return (
        <Router history={history}>
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