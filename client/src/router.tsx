// @ts-nocheck
import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import App from "./App";
// import App from "./App";
import LoginPage from "./pages/loginPage";
import MainViewPage from "./pages/mainViewPage";

import RegisterPage from "./pages/registerPage";
import TestPage from "./pages/testPage";
import PanelTagsPage from "./pages/panelTagsPage";
import PanelPostsAddingPage from "./pages/panelPostsAddingPage";
import PanelPostsPage from "./pages/panelPostsPage";
import PanelPostsUpdatingPage from "./pages/panelPostsUpdatingPage";
import PanelBookmarksPage from "./pages/panelBookmarkPage";
import PanelBookmarkAddingPage from "./pages/panelBookmarkAddingPage";
import panelBookmarkUpdatingPage from "./pages/panelBookmarkUpdatingPage";
import PanelUsersPage from "./pages/panelUsersPage";
import PanelUsersAddingPage from "./pages/panelUsersAddingPage";
import panelUsersUpdatingPage from "./pages/panelUsersUpdatingPage";

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
             <Route path="/panel/tags"><App page={PanelTagsPage}/></Route>
             <Route path="/panel/posts/add"><App page={PanelPostsAddingPage}/></Route>
             <Route path="/panel/posts/:id"><App page={PanelPostsUpdatingPage}/></Route>
             <Route path="/panel/posts"><App page={PanelPostsPage}/></Route>
             <Route path="/panel/bookmarks/add"><App page={PanelBookmarkAddingPage}/></Route>
             <Route path="/panel/bookmarks/:id"><App page={panelBookmarkUpdatingPage}/></Route>
             <Route path="/panel/bookmarks"><App page={PanelBookmarksPage}/></Route>
             <Route path="/panel/users/add"><App page={PanelUsersAddingPage}/></Route>
             <Route path="/panel/users/:id"><App page={panelUsersUpdatingPage}/></Route>
             <Route path="/panel/users"><App page={PanelUsersPage}/></Route>
           </Switch>
      </Router>
    );
  }