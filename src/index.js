import React from 'react';
import ReactDOM from 'react-dom';
import Component from './components/Component';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBarExampleIcon from './components/AppBar';

const App = () => (
    <MuiThemeProvider>
        <div>
            <AppBarExampleIcon />
            <Component />
        </div>
    </MuiThemeProvider>
);

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
