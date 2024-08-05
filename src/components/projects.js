
import react from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ArticlePage from './article';

const Projects = () =>{ 
    return(
       
      <div className="Projects">
       <div className="section-title">
        <h2>Showcase</h2>
       </div>
    <div className="container ">
        <div className="row shwocase-row">
        <div className="col">
                        <div class="card">
                            <img src={require('../assets/sc1.png')} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="gobtn"> <Link to="/ar">Go</Link> </div>
                            </div>
                        </div>
                </div>
                <div className="col">
                        <div class="card">
                            <img src={require('../assets/sc1.png')} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="gobtn">  <a href="#" class="">Go somewhere</a></div>
                            </div>
                        </div>
                </div>
                <div className="col">
                        <div class="card">
                            <img src={require('../assets/sc1.png')} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="gobtn">  <a href="#" class="">Go somewhere</a></div>
                            </div>
                        </div>
                </div>
                <div className="col">
                        <div class="card">
                            <img src={require('../assets/sc1.png')} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="gobtn">  <a href="#" class="">Go somewhere</a></div>
                            </div>
                        </div>
                </div>
                
        </div>
        <div className="row shwocase-row">
        <div className="col">
                        <div class="card">
                            <img src={require('../assets/sc1.png')} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="gobtn">  <a href="#" class="">Go somewhere</a></div>
                            </div>
                        </div>
                </div>
                <div className="col">
                        <div class="card">
                            <img src={require('../assets/sc1.png')} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="gobtn">  <a href="#" class="">Go somewhere</a></div>
                            </div>
                        </div>
                </div>
                <div className="col">
                        <div class="card">
                            <img src={require('../assets/sc1.png')} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="gobtn">  <a href="#" class="">Go somewhere</a></div>
                            </div>
                        </div>
                </div>
                <div className="col">
                        <div class="card">
                            <img src={require('../assets/sc1.png')} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="gobtn">  <a href="#" class="">Go somewhere</a></div>
                            </div>
                        </div>
                </div>
                
        </div>
    </div>
</div>
  
    )
}
export default Projects