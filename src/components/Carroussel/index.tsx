import React  from 'react'
import 'react-awesome-slider/dist/styles.css';
//import { Link } from 'react-router-dom';

import './styles.css'

interface Props {
    className?: string
}

const Caroussel:React.FC<Props> = ({className}) => {
    return(
        <section className="banner">
            <div className="sliders">
                <div className="slide">
                    <div className="slidearea">
                        {/* <img src="https://www.10wallpaper.com/wallpaper/2560x1600/1606/Internet_Business_Technology_HD_Wallpaper_08_2560x1600.jpg" alt=""/> */}
                            <h1>Texto de <br /> <span>Destaque</span></h1>
                            <h2>Legenda</h2>
                            <button className="btn-default btn-primary">Ação!</button>
                        
                    </div>
                </div>
                <div className="slide">
                    <div className="slidearea">
                        <h1>Design is About <br /> <span>teste</span></h1>
                        <h2>Call Us: +00 0 1234 5678</h2>
                       {/*  <Link to="#" className="btn-default btn-primary">Get in touch!</Link> */}
                    </div>
                </div>
                <div className="slide">
                    ...3
                </div>
            </div>
            {/* <div className="sliders-pointers">
                <div className="pointer active"></div>
                <div className="pointer"></div>
                <div className="pointer"></div>
            </div> */}
        </section>
        
    )
}


export default Caroussel