import { useEffect, useState } from "react";

import "./App.css";
import { verify } from "./utils/api.js";

function App() {
  useEffect(() => {
    verifyUser();
  }, []);

  const verifyUser = async () => {
    try {
      const data = await verify();
      if (data) setIsAuthenticated(true);
    } catch (error) {}
  };

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return <div className="App">{isAuthenticated ? "true" : "false"}</div>;
}

export default App;
