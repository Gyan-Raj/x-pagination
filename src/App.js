import logo from "./logo.svg";
import "./App.css";
import Table from "./components/table/Table";

function App() {
  return (
    <div className="App">
      <div className="container">
        <p>Employee Data Table</p>
        <Table />
      </div>
    </div>
  );
}

export default App;
