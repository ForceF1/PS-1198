import React from 'react';
import {Flex} from "@fluentui/react-northstar";
import { Route, Link, Redirect } from "react-router-dom";
import { Home } from '../../pages'

import Dashboard from '../Dashboard';

export default () => (
    <Flex column fill>
        <Route
            exact
            path="/"
            render={() => <Redirect to="/home" />}
        />
        <Route path="/home" component={() => <Home />} />
        {/*<Route path="/home/settings" component={() => <Dashboard />} />*/}
    </Flex>
)
