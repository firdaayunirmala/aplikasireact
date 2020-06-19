import React, {Component} from 'react';

class hitung extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>Anda menekan sebanyak {this.state.count} kali</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Klik saya
        </button>
      </div>
    );
  }
}

export default hitung;

