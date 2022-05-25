import React from "react";
import { Router } from "@reach/router";

import Home from "./pages/Home";
import Artist from "./pages/Artist";

function Routes() {
  return (
    <Router>
      <Home path="/" />
      <Artist path="/artist/:artistId" />
    </Router>
  );
}

export default Routes;
