import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Navbar/nav";
import Content from "./Components/Content/Content";


const App = () => {
  return (
      <div className={'app-wrapper'}>
            <Header/>
            <Sidebar/>
            <Content/>
      </div>
  )

}

export default App;
