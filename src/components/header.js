
import react from 'react'

const Header = () =>{ 
    return(
      <div className="Header">
      <div class="heading-content">
          <div class="img">
          <img src={require('../assets/profile.jpg')} />
          </div>
          <h6>Hi, I'm Rida 👋</h6>
          <h2>Web Developer and  <br/>Content Creator</h2>
          <a class="download" href="http://">Download Resume</a>
      </div>
      
      <div class='heading-social'>
        <div className="items">
          <div className="data">+12</div>
          <div className="data-text">Happy Client</div>
        </div>
        <div className="items">
          <div className="data">+30</div>
          <div className="data-text">Project Held</div>
        </div>
        <div className="items">
          <div className="data">+7</div>
          <div className="data-text">Years Exp</div>
        </div>
        <div className="items">
          <div className="data">+99</div>
          <div className="data-text">Small Tasks</div>
        </div>


      </div>
      </div>
    )
}
export default Header