import React from 'react';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  render() {
    return(
      <div><hr />
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <Link class="nav-link" to="/">Beranda</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/aboutme">Me</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/gallery">Gallery</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/cart">cart</Link>
          </li>
          <li class="nav-item">
            <Link to="/pegawai" class="nav-link">Daftar Pegawai</Link> 
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/karya">Karya</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/kontak">Kontak</Link>
          </li>
          
        </ul><hr />
        <p><Utama /></p>
      </div>
    );
  } 
}

export default App;