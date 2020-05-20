import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import NoMatch from "./pages/NoMatch/NoMatch";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Signin from "./pages/Signin/Signin";

// Utilities
import API from "./utils/API";

// Context Information
import DevDataContext from "./utils/DevDataContext";
import SetupContext from "./utils/SetupContext";

// Components
import { Layout } from "./components/Layout";
//
// devData - This is in the format of how we are reading the database.
const App = () => {
  const [devData, setDevData] = useState({
    repositories: [],
    loginName: "",
    password: "",
    fname: "",
    lname: "",
    email: "",
  });
  const devDataProvider = useMemo(() => ({ devData, setDevData }), [
    devData,
    setDevData,
  ]);

  // setup - This tracks our initialization process.
  const [setup, setSetup] = useState({
    isLoadedFlag: false,
    initialized: false,
  });
  const setupProvider = useMemo(() => ({ setup, setSetup }), [setup, setSetup]);

  // On load find active user
  useEffect(() => {
    console.log("start");
    API.getActiveDevData().then((activeDevData) => {
      if (activeDevData.data) {
        setDevData(activeDevData.data);
        setSetup({
          isLoadedFlag: true,
          initialized: true,
        });
        API.getsync();
      } else {
        setSetup({
          isLoadedFlag: true,
          initialized: false,
        });
      }
    });
    console.log("end");
  }, []);
  console.log("setup.initialized", setup.initialized);
  console.log("setup.isLoadedFlag", setup.isLoadedFlag);
  return (
    <div>
      {setup.isLoadedFlag ? (
        <React.Fragment>
          <Layout>
            <Router>
              <Switch>
                <DevDataContext.Provider value={devDataProvider}>
                  <SetupContext.Provider value={setupProvider}>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/signin" component={Signin} />
                  </SetupContext.Provider>
                </DevDataContext.Provider>
                <Route component={NoMatch} />
              </Switch>
            </Router>
          </Layout>
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default App;
