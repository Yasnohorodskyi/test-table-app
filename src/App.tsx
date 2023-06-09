import React from "react";
import "./App.css";
import Table from "./components/table/index.component";
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

const searchRequest = "Ken";

const highLightRequets = {
  first_name: "b",
  last_name: "e",
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Table</h1>
      </header>
      <Table
          data={data}
          tableHeaders={tableHeaders}
          tableSizes={tableSizes}
          highLightRequets={highLightRequets}
          scrollable
          searchRequest={searchRequest}
        />
    </div>
  );
}

export default App;
