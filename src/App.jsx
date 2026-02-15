import { useState } from "react";
import FrontendPagination from "./components/FrontendPagination";
import BackendPagination from "./components/BackendPagination";
import Table from "./components/Table";
import "./App.css";

function App() {
  const [activeComponent, setActiveComponent] = useState("table");

  const renderComponent = () => {
    switch (activeComponent) {
      case "frontend":
        return <FrontendPagination />;
      case "backend":
        return <BackendPagination />;
      case "table":
      default:
        return <Table />;
    }
  };

  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setActiveComponent("table")}>Table</button>

        <button onClick={() => setActiveComponent("frontend")}>
          Frontend Pagination
        </button>

        <button onClick={() => setActiveComponent("backend")}>
          Backend Pagination
        </button>
      </div>

      {renderComponent()}
    </>
  );
}

export default App;
