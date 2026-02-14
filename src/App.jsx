import { useState, useEffect } from "react";
import { FrontendPagination } from "./components/FrontendPagination";
import { BackendPagination } from "./components/BackendPagination";
import "./App.css";

function App() {
  const [count, setCount] = useState([]);

  return (
    <>
      <FrontendPagination />
    </>
  );
}

export default App;
