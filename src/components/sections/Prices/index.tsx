import { Link } from "react-router-dom"

import './styles.css'

export const Prices = () => {
    return(
        <section className="default light">
            <div className="section-title">Planos</div>
            <div className="section-desc">Confira nossos planos</div>
            <div className="section-body">
                <div className="section-price">
                    <div className="section-price--item">
                        <div className="section-price--item-name">PLano</div>
                        <div className="section-price--item-money">R$ 99,99</div>
                        <div className="section-price--item-period">/ mês</div>
                        <div className="section-price--item-point">Serviço<br />--</div>
                        <div className="section-price--item-point">Serviço<br />--</div>
                        <div className="section-price--item-point">Serviço<br />--</div>
                        <div className="section-price--item-point">Serviço<br />--</div>
                        <Link to="#" className="btn-default btn-primary">Adquirir</Link>
                    </div>
                    <div className="section-price--item">
                        <div className="section-price--item-name">PLano</div>
                        <div className="section-price--item-money">R$ 99,99</div>
                        <div className="section-price--item-period">/ mês</div>
                        <div className="section-price--item-point">Serviço<br />--</div>
                        <div className="section-price--item-point">Serviço<br />--</div>
                        <div className="section-price--item-point">Serviço<br />--</div>
                        <div className="section-price--item-point">Serviço<br />--</div>
                        <Link to="#" className="btn-default btn-primary">Adquirir</Link>
                    </div>
                    <div className="section-price--item">
                        <div className="section-price--item-name">PLano</div>
                        <div className="section-price--item-money">R$ 99,99</div>
                        <div className="section-price--item-period">/ mês</div>
                        <div className="section-price--item-point">Serviço<br />--</div>
                        <div className="section-price--item-point">Serviço<br />--</div>
                        <div className="section-price--item-point">Serviço<br />--</div>
                        <div className="section-price--item-point">Serviço<br />--</div>
                        <Link to="#" className="btn-default btn-primary">Adquirir</Link>
                    </div>
                    <div className="section-price--item">
                        <div className="section-price--item-name">PLano</div>
                        <div className="section-price--item-money">R$ 99,99</div>
                        <div className="section-price--item-period">/ mês</div>
                        <div className="section-price--item-point">Serviço<br />--</div>
                        <div className="section-price--item-point">Serviço<br />--</div>
                        <div className="section-price--item-point">Serviço<br />--</div>
                        <div className="section-price--item-point">Serviço<br />--</div>
                        <Link to="#" className="btn-default btn-primary">Adquirir</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}