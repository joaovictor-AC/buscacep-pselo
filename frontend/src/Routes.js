import { Route, Router, Switch } from "react-router";
import history from "./core/utils/history";

function Routes () {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact>
                    <h1>Home</h1>
                </Route>
                <Route path="/searches">
                    <h1>Searche</h1>
                </Route>
                <Route path="/login">
                    <h1>Login</h1>
                </Route>
                <Route path="/register">
                    <h1>Register</h1>
                </Route>
            </Switch>
        </Router>
    )
} 
export default Routes;