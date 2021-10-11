import Homepage from "./components/homepage/Homepage";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import SummaryOne from "./pages/summaryOne/SummaryOne";
import SummaryTwo from "./pages/summaryTwo/SummaryTwo";
import SummaryThree from "./pages/summaryThree/SummaryThree";


function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
      <Route path="/" exact component={Homepage}/>
      <Route path="/SummaryOne" component={SummaryOne} />
      <Route path="/SummaryTwo" component={SummaryTwo} />
      <Route path="/SummaryThree" component={SummaryThree} />
     </Switch>
    </div>
    </Router>
  );
}

export default App;
