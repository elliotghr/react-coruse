import React from "react";

function Login() {
  return <p>Login</p>;
}

function Logout() {
  return <p>Logout</p>;
}

export default class RenderizadoCondicional extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: true,
    };
  }

  render() {
    return (
      <div>
        <h2>Conditional Render</h2>
        {this.state.session ? <Login /> : <Logout />}
      </div>
    );
  }
}
