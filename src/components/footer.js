
import react from 'react'

const Footer = () =>{ 
    return(
      <div className="footer">
        
        <div className="row">
            <div className="col">
                <h3>Contact Me</h3>
                <ul className='listitems'>
                    <li><a href="">dahhane@aqweeb.com</a></li>
                    <li><a href="">+212621780901</a></li>
                    <li><a href="">Whatsapp</a></li>

                </ul>
            </div>

            <div className="col">
                <h3>Social Media</h3>
                <ul className='listitems'>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">LinkkedIn</a></li>
                    <li><a href="">Github</a></li>
                </ul>
            </div>

            <div className="col">
                <h3>Profil Freelance</h3>
                <ul className='listitems'>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">LinkkedIn</a></li>
                    <li><a href="">Github</a></li>
                </ul>

            </div>
        </div>


      </div>
    )
}
export default Footer  