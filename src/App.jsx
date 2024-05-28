import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import RegistrationForm from './components/RegistrationForm';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contacts" component={Contact} />
        <Route path="/registration-form" component={RegistrationForm} />
      </Switch>
    </Router>
  );
};

export default App;
