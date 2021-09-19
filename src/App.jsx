import React from "react";
import { Route,Switch } from "react-router";
import Navbar from "./Navbar";
import Error from "./Error";
import About from "./About";
import Contact from "./Contact";
import Careers from "./Careers";
import News from "./News";
import './index.css';
const App=()=>{
    return(
        <>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/careers" component={Careers}/>
            <Route exact path="/news/:fname/:lname" component={News}/>
            <Route component={Error}/>
        </Switch>
        </>
    );
}



export default App;