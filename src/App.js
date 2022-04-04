import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  // state = {
  //   progress: 0,
  // };
  const [progress, setProgress] = useState(0);

  // const apiKey = "c582e5a434194d319b49070a08665460";
  const apiKey = process.env.REACT_APP_NEWS_API;

  const pageSize = 5;
  return (
    <>
      <Router>
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Navbar />
        <Routes>
          <Route
            exact
            path="/business"
            element={
              <News
                progress={setProgress}
                key={"business"}
                pageSize={pageSize}
                country={"in"}
                apiKey={apiKey}
                category="business"
              />
            }
          ></Route>
          <Route
            exact
            path="/"
            element={
              <News
                progress={setProgress}
                key={"business"}
                pageSize={pageSize}
                country={"in"}
                apiKey={apiKey}
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                progress={setProgress}
                key={"entertainment"}
                pageSize={pageSize}
                country={"in"}
                apiKey={apiKey}
                category="entertainment"
              />
            }
          ></Route>
          <Route
            exact
            path="/general"
            element={
              <News
                progress={setProgress}
                key={"general"}
                pageSize={pageSize}
                country={"in"}
                apiKey={apiKey}
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                progress={setProgress}
                key={"health"}
                pageSize={pageSize}
                country={"in"}
                apiKey={apiKey}
                category="health"
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                progress={setProgress}
                key={"science"}
                pageSize={pageSize}
                country={"in"}
                apiKey={apiKey}
                category="science"
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                progress={setProgress}
                key={"sports"}
                pageSize={pageSize}
                country={"in"}
                apiKey={apiKey}
                category="sports"
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                progress={setProgress}
                key={"technology"}
                pageSize={pageSize}
                country={"in"}
                apiKey={apiKey}
                category="technology"
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
