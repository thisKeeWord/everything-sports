import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import MainSite from './main-site.jsx';

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={MainSite} />
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('content'));