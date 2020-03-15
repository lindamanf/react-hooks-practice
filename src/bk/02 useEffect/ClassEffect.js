import React, { Component } from "react";

export class ClassEffect extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  // コンポーネントがマウントされたタイミング
  componentDidMount() {
    document.title = `クリック数： ${this.state.count} 回`;
  }
  // コンポーネントが再レンダーされるタイミング
  componentDidUpdate() {
    document.title = `クリック数： ${this.state.count} 回`;
  }
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <h1>クリック数： {this.state.count}</h1>
        <button onClick={this.incrementCount}>カウント</button>
      </div>
    );
  }
}

export default ClassEffect;
