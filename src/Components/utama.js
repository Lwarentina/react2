import React from "react";
import {Route, Routes } from "react-router-dom";

import Beranda from "./beranda";
import Aboutme from "./aboutme";
import Karya from "./karya";
import Kontak from "./kontak";
import Gallery from "./gallery";
import Cart from "./cart";
import Pegawai from './pegawai';

class Utama extends React.Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<Beranda/>} />
        <Route path="/aboutme" element={<Aboutme/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/karya" element={<Karya/>} />
        <Route path="/kontak" element={<Kontak/>} />
        <Route path="/pegawai" component={Pegawai} />
      </Routes>
    );
  }
}

export default Utama;
