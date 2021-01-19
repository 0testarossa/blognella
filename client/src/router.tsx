// @ts-nocheck
import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import App from "./App";
// import App from "./App";
import LoginPage from "./pages/loginPage";
import MainViewPage from "./pages/mainViewPage";

import RegisterPage from "./pages/registerPage";
import TestPage from "./pages/testPage";

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
             <Route exact path="/"> <App page={MainViewPage} /> </Route>
             {/* <Route
              exact path='/'
              render={(props) => (
                <App page={MainViewPage} />
              )}
            /> */}

             <Route path="/register"><App page={RegisterPage} /></Route>
             <Route path="/login"><App page={LoginPage}/></Route>
             <Route path="/test"><App page={TestPage}/></Route>
           </Switch>
      </Router>
    );
  }