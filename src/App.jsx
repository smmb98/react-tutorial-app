import React from "react";
import { Route, Switch } from "react-router-dom";

import MainNavigation from "./components/layouts/MainNavigation/MainNavigation";
import AllMeetups from "./components/pages/AllMeetups/AllMeetups";
import Favorite from "./components/pages/Favorites/Favorites";
import NewMeetup from "./components/pages/NewMeetup/NewMeetup";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllMeetups></AllMeetups>
        </Route>

        <Route path="/favorites" exact>
          <Favorite></Favorite>
        </Route>

        <Route path="/new-meetup" exact>
          <NewMeetup></NewMeetup>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
