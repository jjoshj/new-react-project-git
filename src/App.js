
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css'
import { ProjectsCard } from './ProjectsCard';
import { SmallCards } from './SmallCards';
import { BottomCards } from './BottomCards';
import { ColorButtons } from './ColorButtons';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import { Sidenave, Navebar } from './Navebar';


function App() {
  return (
    <>
     <Mainnave/>
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

function Mainnave(){
  return(
    <>
  <Router>
    
    <div>
     <Sidenave/> 

       
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
          <Navebar/>
  < Dashboard/>
  </div>
          </Route>
        </Switch>
      </div>
    </Router>
  </>
  );
}

export default App;
