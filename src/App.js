import React from "react";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import './App.css'; // Import your CSS file



function App() {
  return (
    <div className="container">
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
