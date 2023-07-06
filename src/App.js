import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Navbar/nav";
import Content from "./Components/Content/Content";
import Dialogs from "./Components/Dialogs/Dialogs";


const App = () => {
  return (
      <div className={'app-wrapper'}>
            <Header/>
            <Sidebar/>
          <div className={"app-wrapper-content"}>
            <Dialogs/>
          </div>
            {/*<Content/>*/}
      </div>
  )

}

export default App;