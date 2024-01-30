import React from "react"

class navbar extends React.Component {
    render() {
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Beranda
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">a<Link to="/">Beranda</Link></a>
                <a class="dropdown-item" href="#">b<Link to="/aboutme">about me</Link></a>
                <a class="dropdown-item" href="#">c<Link to="/karya">Karya</Link></a>
                <a class="dropdown-item" href="#">d<Link to="/kontak">Kontak</Link></a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
        )
    }
}

export default navbar;