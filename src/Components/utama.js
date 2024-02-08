import React from "react";
import {Route, Routes } from "react-router-dom";

import Beranda from "./beranda";
import Aboutme from "./aboutme";
import Karya from "./karya";
import Kontak from "./kontak";
import Gallery from "./gallery";

class Utama extends React.Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<Beranda/>} />
        <Route path="/aboutme" element={<Aboutme/>} />
        <Route exact path="/gallery" element={<Gallery/>} />
        <Route path="/karya" element={<Karya/>} />
        <Route path="/kontak" element={<Kontak/>} />
      </Routes>
    );
  }
}

export default Utama;
