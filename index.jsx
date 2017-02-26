'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      seconds: 0,
      expired: false
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        seconds: this.state.seconds + 1
      });
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState);
    return true;
  }

  render() {
    return (
      <div>
        {this.state.seconds}
      </div>
    );
  }
}

const style = {
  backgroundColor: '#CCC',
  width: '100vw',

};

class UserCard extends React.Component {
  render() {
    return (
      <div className='my-class' id='my-id' style={style}>
        {this.props.name}

        {this.props.email ? (
          <span>{this.props.email}</span>
        ) : null}
      </div>
    );
  }
}

UserCard.propTypes = {
  name: React.PropTypes.string.isRequired,
  email: React.PropTypes.string
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user_name: 'Erick'
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        user_name: 'Andrew'
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <Timer/>
        <UserCard name="erick" email="erick@email.com"/>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('first-render')
);
