import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default User",
  status: "offline"
});

export default UserContext;