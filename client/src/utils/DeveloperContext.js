import React from "react";

// This is the Developer record.  This contains all repos.
const DeveloperContext = React.createContext({
  loginName: "",
  password: "",
  lname: "",
  fname: "",
  email: "",
  active: true,
  repositories: [],
});

export default { DeveloperContext };
