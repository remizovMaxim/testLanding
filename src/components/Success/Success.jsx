import React from 'react'
import Description from "../common/Description/Description"
import './success.css'
import card1 from "../../images/card1.png"
import card2 from "../../images/card2.png"
import card4 from "../../images/card4.png"
import card5 from "../../images/card5.png"
import card6 from "../../images/card6.png"

const Success = function () {
    return (
        <section className='success'>
            <Description title='Наши успехи'>
                <p>Мы каждый день разрабатываем новые учебные методики, благодаря которым
наши слоны становятся воспитаннее и умнее.<br />
Посмотрите, чему научились наши слоны за последний год!</p>
            </Description>
            <div className="services_list container">
                <div className="list_card list_card-quad">
                    <img src={card1} className="list_card_bg" alt="background" />
                    <div className="list_card_hover"></div>
                    <h4 className="list_card_title">Слон Артур выступает за феминизм</h4>
                </div>
                <div className="list_card list_card-other">
                    <img src={card2} className="list_card_bg" alt="background" />
                    <div className="list_card_hover"></div>
                    <h4 className="list_card_title">Слон Артур выступает за феминизм</h4>
                </div>
                <div className="list_card list_card-quad">
                    <img src={card4} className="list_card_bg" alt="background" />
                    <div className="list_card_hover"></div>
                    <h4 className="list_card_title">Слон Артур выступает за феминизм</h4>
                </div>
                <div className="list_card list_card-quad">
                    <img src={card5} className="list_card_bg" alt="background" />
                    <div className="list_card_hover"></div>
                    <h4 className="list_card_title">Слоновья ферма</h4>
                </div>
                <div className="list_card list_card-other">
                    <img src={card6} className="list_card_bg" alt="background" />
                    <div className="list_card_hover"></div>
                    <h4 className="list_card_title">Слоновья ферма</h4>
                </div>
                <div className="list_card list_card-quad">
                    <img src={card2} className="list_card_bg" alt="background" />
                    <div className="list_card_hover"></div>
                    <h4 className="list_card_title">Слоновья ферма</h4>
                </div>
            </div>
        </section>
    )
}

export default Success