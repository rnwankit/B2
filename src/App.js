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
import Medicines from './Containers/Medicines';
import BookAppointment from './Containers/BookAppointment';
import ListAppointment from './Containers/ListAppointment';
import PublicRoute from './route/PublicRoute';
import PrivateRoute from './route/PrivateRoute';
import Appointment from './Containers/Appointment';
import LAppointment from './Containers/LAppointment';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute exact  path="/about" component={About} />
        <PublicRoute exact path="/pageNotFound" component={pageNotFound} />
        <PublicRoute restricted={true} exact path="/login" component={Login} />
        <PublicRoute exact path="/counter" component={Counter} />
        <PublicRoute exact path="/medicines" component={Medicines} />
        <PrivateRoute path="/appointment" component={Appointment} />
        <PrivateRoute path="/lappointment" component={LAppointment} />
        <Redirect to="/pageNotFound" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
