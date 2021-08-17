
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css'
import { ProjectsCard } from './ProjectsCard';
import { SmallCards } from './SmallCards';
import { BottomCards } from './BottomCards';
import { ColorButtons } from './ColorButtons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
     <Sidenave/>
    
   
    </>
      
  );
}
function Dashboard() {
  return (
    <  >
    
    <h3>Dashboard</h3>
    
     <SmallCards/>
     <div className="dashboard">
     <div className="projectcard"><ProjectsCard/></div>
     <div className="bottomcard"><BottomCards/></div>
     <ColorButtons/>
     
    
     </div>
    </>
  );
}

function Sidenave(){
  return(
    <>
  <Router>
    <div>
      
      <Navebar/>
      
      <div class="sidebar">
      <a >welcome
            </a>
      
            <a class="active" href="#home">
              <Link to="/">Home</Link></a>
           
            <a href="#about">
              <Link to="/about">About</Link></a>
           
            <a href="#Users">
              <Link to="/users">Users</Link></a>
      </div>
    
    
      
           

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <h1>hai</h1>
          </Route>
          <Route path="/users">
          <div class="content">
          <Navebar/>
          <ColorButtons/>
  </div>
          </Route>
          <Route path="/">
         
          <div class="content">
         
  < Dashboard/>
  </div>
          </Route>
        </Switch>
      </div>
    </Router>
  </>
  );
}

function Navebar(){
  return(
    <div class="navbar">
    <a class="active" href="#"><i class="fa fa-fw fa-home"></i> Home</a>
    <a href="#"><i class="fa fa-fw fa-search"></i> Search</a>
    <a href="#"><i class="fa fa-fw fa-envelope"></i> Contact</a>
    <a href="#"><i class="fa fa-fw fa-user"></i> Login</a>
  </div>
  );
}

 
export default App;
