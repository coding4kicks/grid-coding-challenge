import React from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Dashboard from './containers/dashboard.jsx';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const MyAwesomeReactComponent = () => (
  <RaisedButton label="Default" />
);

class App extends React.Component {

  render () {
    return (
      <MuiThemeProvider>
        <div>
          <p> Hello Grid!</p>
          <Dashboard />
        </div>
      </MuiThemeProvider>
    );
  }
}

render(<App/>, document.getElementById('app'));