import BluePage from "./pages/BluePage/BluePage";
import RedPage from "./pages/RedPage/RedPage";
import YellowPage from "./pages/YellowPage/YellowPage";
import { useState } from "react";

function App() {
  const selectedPage = window.location.pathname.split("/")[1];

  const [currentPage, setCurrentPage] = useState(selectedPage || "red");
  
  const goToPage = (page) => {
    setCurrentPage(page);

    // update the browser history object!
    window.history.pushState({}, "", `/${page}`);
  }

  return (
    <>
      <nav>
        <ul>
          <li onClick={ () => {goToPage("red") }}>Red</li>
          <li onClick={ () => {goToPage("blue") }}>Blue</li>
          <li onClick={ () => {goToPage("yellow") }}>Yellow</li>
        </ul>
      </nav>
      
      {currentPage === "red" && <RedPage />}
      {currentPage === "blue" && <BluePage /> }
      {currentPage === "yellow" && <YellowPage />}
    </>
  );
}

export default App;
