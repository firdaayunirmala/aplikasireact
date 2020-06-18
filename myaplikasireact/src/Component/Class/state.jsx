import React, {Component} from 'react';

class Kursus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paket: "kursus programing",
      materi: "Raeact js",
      desc: "belajar react js",
      Harga: 200000
    };
  }

  render() {
    return (
      <div>
        <p>Nama Paket      : {this.state.paket}</p>
        <p>Jenis Materi    : {this.state.materi}</p>
        <p>Deskripsi paket : {this.state.desc}</p>
        <p>Nama Paket      : {this.state.Harga}</p>
      </div>
    );
  }
}

export default Kursus;
