import { Route, Router, Switch } from "react-router";
import NotFound from "./core/components/NotFound";
import history from "./core/utils/history";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

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
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route>
                    <NotFound/>
                </Route>
            </Switch>
        </Router>
    )
} 
export default Routes;