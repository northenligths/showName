import Homepage from "./components/homepage/Homepage";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
      <Route path="/" exact component={Homepage}/>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
