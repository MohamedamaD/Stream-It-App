import "./App.scss";
import { Route, Switch } from "react-router-dom";
import {
  About,
  Contact,
  Home,
  Login,
  Movie,
  Register,
  SearchResult,
} from "./pages";
import { Footer, Header } from "./containers";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Movie/:movieId" component={Movie} />
        <Route exact path="/search/:searchQuery" component={SearchResult} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
