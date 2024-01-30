import React from 'react';
import Utama from './Components/utama';
import Navbar from './Components/navb'
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  render() {
    return(
      <div><hr />
        <button type="button" class="btn btn-outline-primary"><Link to="/">Beranda</Link> </button>|
        <button type="button" class="btn btn-outline-primary"><Link to="/aboutme">Me</Link></button> |
        <button type="button" class="btn btn-outline-primary"><Link to="/karya">Karya</Link></button> |
        <button type="button" class="btn btn-outline-primary"><Link to="/kontak">Kontak</Link></button>
        <hr />
        <p><Utama /></p>
      </div>
    );
  }
}

export default App;