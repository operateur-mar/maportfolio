import react from 'react'

const Navbar = () =>{ 
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <span class="email">
            <i class="fa-solid fa-envelope icon"></i>
            dahhane@aqweeb.com
          </span>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse nav-top-right-items" id="navbarText">
           <a href="#profile">Profil</a>
           <a href="#skills">Mes Compétences</a>

           <a href="#Projects">Mes Projets</a>
           <a href="#contact">Contactez moi</a>
          </div>
        </div>
      </nav>
    )
}

export default Navbar