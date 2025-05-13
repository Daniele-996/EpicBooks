import {} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./assets/components/MyNav";
import MyFooter from "./assets/components/MyFooter";
import Welcome from "./assets/components/Welcome";
import AllTheBooks from "./assets/components/AllTheBooks";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </>
  );
}

export default App;
