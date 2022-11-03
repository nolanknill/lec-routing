import BluePage from "./pages/BluePage/BluePage";
import RedPage from "./pages/RedPage/RedPage";
import YellowPage from "./pages/YellowPage/YellowPage";
import { useState } from "react";
import "./App.scss";

function App() {
  // What might currentPage hold? 
  const initialPageValue = window.location.pathname.split("/")[1];
  const [currentPage, setCurrentPage] = useState(initialPageValue || "red");
 
  const handleClick = (page) => {
    setCurrentPage(page);

    window.history.pushState({}, "", `/${page}`);
  }

  return (
    <>
      <ul className="nav">
        <li onClick={ () => { handleClick("red"); }}>Red</li>
        <li onClick={ () => { handleClick("blue"); }}>Blue</li>
        <li onClick={ () => { handleClick("yellow"); } }>Yellow</li>
      </ul>
      {currentPage === 'red' && <RedPage />}
      {currentPage === 'blue' && <BluePage />}
      {currentPage === 'yellow' && <YellowPage />}
    </>
  );
}

export default App;
