import React from "react";
import { username, city } from "../data/user";

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

import React from "react";
import { username, city } from "../data/user";

function Home() {
  return (
    <div id="home">
      <h1>Welcome, {username}!</h1>
      <p>You are from {city}.</p>
    </div>
  );
}

export default Home;

