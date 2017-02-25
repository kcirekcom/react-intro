'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class HelloAndrew extends React.Component {
  render() {
    return <div>Hello, Andrew</div>;
  }
}

ReactDOM.render(
  <HelloAndrew/>,
  document.getElementById('first-render')
);
