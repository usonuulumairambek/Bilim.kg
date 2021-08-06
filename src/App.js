import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import "./sass/base.sass";
import Header from "./components/Header/Header";
import MainPages from "./components/MainPages";
import Course from "./components/Course/Course";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPages} />
          <Route exact path="/Course" component={Course} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Course" component={Course} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
