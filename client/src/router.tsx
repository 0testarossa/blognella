import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import App from "./App";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";

// export default <Router history={hashHistory}>
//   <Route path="/" component={App}>
//     <IndexRoute component={AppSplash}/>
//     <Route path="demo" component={AppDemo}/>
//   </Route>
// </Router>

export default function BasicExample() {
    return (
      <Router>
          <Switch>
             <Route exact path="/"> <App /> </Route>
             {/* <Route path={"/about"}><About /></Route> */}
             <Route path="/register"><RegisterPage /></Route>
             <Route path="/login"><LoginPage /></Route>
           </Switch>
      </Router>
    );
  }