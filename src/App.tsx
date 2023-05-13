import React from "react";
import "./App.css";
import Table from "./components/ui/table/table.component";
import data from "./content/mockData/mock.json";

const tableHeaders = [
  "Avatar",
  "First Name",
  "Last Name",
  "Email Address",
  "Ethereum Address",
  "IP Address",
];

const tableSizes = {
  headerHeight: 4,
  rowHeight: 3,
  striped: true,
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Reusable Table Component</h1>
        <Table
          data={data}
          tableHeaders={tableHeaders}
          tableSizes={tableSizes}
        />
      </header>
    </div>
  );
}

export default App;
