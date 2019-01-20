import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';

import Home from './pages/Home';
import Both from './pages/Both';
import PenaltyBoxManager from './pages/PenaltyBoxManager';
import PenaltyTimer from './pages/PenaltyTimer';
import NotFound from './pages/NotFound';

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/penalty-timer" component={PenaltyTimer} />
            <Route path="/penalty-box-manager" component={PenaltyBoxManager} />
            <Route path="/both" component={Both} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
