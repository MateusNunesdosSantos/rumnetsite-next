
import { Link } from 'react-router-dom'

import img from '../../../assets/img/undraw_business_deal_cpi9.svg'
import './styles.css'

export const About = () => {
    return(
        <section className="default light">
                <div className="section-title">Sobre nós</div>
                <div className="section-desc">Quem somos?</div>
                <div className="section-body">
                    <div className="section-about">
                        <div className="section-about--left">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                galley
                                of type and scrambled it to make a type specimen book. It has survived not only five
                                centuries,
                                but also the leap into electronic typesetting, remaining essentially unchanged. It was
                                popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                passages,
                                and more recently with desktop publishing software like Aldus PageMaker including versions
                                of
                                Lorem Ipsum.</p>
                            <br/>
                            <Link to="/institucional" className="btn-default btn-primary">Leia mais</Link>
                        </div>
                        <div className="section-about--right">
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
            </section>
    )
}