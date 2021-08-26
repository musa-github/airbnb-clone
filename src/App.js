import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
function App() {
  return (
    <div className="app">
   
     <Router>

          <Header/>
          <Switch>
            <Route path="/search">
              <SearchPage/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
          <Footer/>
     </Router>
   
     {/* search page */}
      {/* header */} 
      {/* ..... */}
    </div>
  );
}

export default App;
