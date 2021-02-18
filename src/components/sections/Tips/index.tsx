
import imgResearch from '../../../assets/img/undraw_researching_22gp.svg'

import './styles.css'

export const Tips = () => {
    return (
        <section className="default light">
                <div className="section-title"></div>
                <div className="section-desc"></div>
                <div className="section-body">
                    <div className="section-plus">
                        <div className="section-plus--left">
                        <img src={imgResearch} alt="" />
                        </div>
                        <div className="section-plus--right">
                        <h2>Lorem Ipsum is simply dummy text!</h2><br/>
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
                        </div>
                    </div>
                </div>
            </section>
    )
}