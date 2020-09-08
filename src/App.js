import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Input from "./components/Input";
import Location from "./components/Location";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App ">
      <Nav />
      <div className="w-90 center">
        <Header />
        <Input />
        <Location />
      </div>
      <Footer />
    </div>
  );
}

export default App;
