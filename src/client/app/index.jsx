import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {rootReducer} from './reducers/rootReducer.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {fetchPhotosFromAPI} from './actions/photos.js';
import VisibleDashboard from './containers/dashboard.jsx';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const initialState = {};
const loggerMiddleware = createLogger();
const middleware = applyMiddleware(
  thunkMiddleware, // lets us dispatch() functions
  loggerMiddleware // neat middleware that logs actions
);

const store = createStore(rootReducer, initialState, middleware);

// Fetch photos on load
store.dispatch(fetchPhotosFromAPI());

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <VisibleDashboard />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

render(<App/>, document.getElementById('app'));