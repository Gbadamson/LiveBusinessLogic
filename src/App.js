import "./App.css";
import HeadUp from "./components/HeadUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import { GlobalProvider } from "./components/GlobalContext";
import Cruiser from "./components/Cruiser";
import Feedback from "./components/Feedback";
import "antd/dist/antd.css";
import EditStudent from "./components/UseCase/EditStudent";
import AddStudent from "./components/UseCase/AddStudent";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <HeadUp />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/cruise" component={Cruiser} />
          <Route exact path="/feedback" component={Feedback} />
          <Route exact path="/student/:id" component={EditStudent} />
          <Route exact path="/addstudent" component={AddStudent} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
