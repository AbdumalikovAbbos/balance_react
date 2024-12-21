import React, { Component } from "react";
import "./App.css";

class UserBalance extends Component {
  render() {
    const { balance, onChangeBalance } = this.props;
    return (
      <div className="user-balance">
        <h2>Balance</h2>
        <div className="balance-details">
          <button className="btn btn-dark">User balance</button>
          <p className="p-4">{balance}</p>
        </div>
        <button onClick={onChangeBalance} className="change-balance-button">
          Change Balance
        </button>
      </div>
    );
  }
}

class UserDetails extends Component {
  render() {
    const { firstName, lastName } = this.props;
    return (
      <div className="user-details">
        <h2>User</h2>
        <p>FirstName: {firstName}</p>
        <p>LastName: {lastName}</p>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: "Abdusobur",
        lastName: "Xalimov",
        balance: 13000,
      },
    };
  }

  changeBalance = () => {
    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        balance: prevState.user.balance + 4411,
      },
    }));
  };

  render() {
    const { firstName, lastName, balance } = this.state.user;
    return (
      <div className="user-balance">
        <div className="user-info">
          <UserDetails firstName={firstName} lastName={lastName} />
          <UserBalance balance={balance} onChangeBalance={this.changeBalance} />
        </div>
      </div>
    );
  }
}
export default App