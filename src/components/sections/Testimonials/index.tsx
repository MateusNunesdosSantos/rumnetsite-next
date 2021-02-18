
import './styles.css'

export const Testimonials = () => {
    return(
        <section className="default dark testimonials bg-testimonials">
            <div className="section-title">Clientes Satisfeitos</div>
            <div className="section-desc">Depoimentos</div>
            <div className="section-body">
                <div className="section-testimonials">
                    <div className="sliders">
                        <div className="slide">
                            <div className="slidearea">
                                {/* <img className="section-testimonials--avatar" src="media/homem2.png" /> */}
                                <div className="section-testimonials--name">Fulano de Tal</div>
                                <div className="section-testimonials--role"></div>
                                {/* <img className="section-testimonials--quoteimg" src="assets/images/quote.png" /> */}
                                <div className="section-testimonials--quote">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed vel eros vitae erat condimentum viverra a nec lacus. Maecenas
                                    eros lectus, rhoncus vel dictum vel, dignissim eget ligula. Vestibulum id tempus
                                    quam, sed pellentesque quam.</div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="sliders-pointers">
                        <div className="pointer active"></div>
                        <div className="pointer"></div>
                        <div className="pointer"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}