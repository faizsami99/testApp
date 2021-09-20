
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Beach from "./components/beach";
import Home from "./components/home";

function App(){
    return (
        <>
            <section className="sundayMobility">
                <Beach/>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Login}/>
                        <Route path="/signup" component={Signup}/>
                        <Route path="/home" component={Home}></Route>
                    </Switch>
                </Router>
            </section>
        </>
    );
}

export default App;
