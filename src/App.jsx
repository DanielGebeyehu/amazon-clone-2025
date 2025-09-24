import { useState, useEffect, useContext } from "react";
import "./App.css";
import Routing from "./Router";
import { DataContext } from "./Components/DataProvider/DataProvider";
import { Type } from "./Components/Utility/action.type";
import { auth } from "./Components/Utility/firebase";

function App() {
  const [count, setCount] = useState(0);
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({ type: Type.SET_USER, user: null });
      }
    });
  }, []);
  return (
    <>
      <Routing />
    </>
  );
}

export default App;
