import { Redirect } from 'react-router-dom';

import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Containers/Home';

import { Route, Switch } from "react-router-dom";
import About from './Containers/About';
import pageNotFound from './Components/pageNotFound';
import Login from './Containers/Login';
import Counter from './Containers/Counter';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/about" component={About} />
        <Route path="/pageNotFound" component={pageNotFound} />
        <Route path="/login" component={Login} />
        <Route path="/counter" component={Counter} />
        <Redirect to="/pageNotFound" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
