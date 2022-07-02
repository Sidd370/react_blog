import TopBar from "./components/Topbar/TopBar";
import Home from "./pages/home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Write from "./pages/Write/Write";
import Settings from "./pages/Settings/Settings";
import Single from "./pages/Single/Single";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  const user= true;
  return (
    <Router>
    <TopBar />
    <Switch>
      <Route exact path="/home">
        <Home />
        </Route>
        <Route path="/register">
        {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">
        {user ? <Home /> : <Login />}
        </Route>
        <Route path="/write">
        {user ? <Write /> : <Register />}
        </Route>
        <Route path="/settings">
        {user ? <Settings /> : <Register />}
        </Route>
        <Route path="/single">
        <Single />
        </Route>
        <Route path="/about">
        <About />
        </Route>
        <Route path="/contact">
        <Contact />
        </Route>
        
    </Switch>
    </Router>
  );
}
    
export default App;
 