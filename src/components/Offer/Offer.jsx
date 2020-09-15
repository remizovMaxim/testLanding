import React from "react"
import "./offer.css"
import bgPath from "../../images/offer-background.png"
import Button from "../common/Button/Button"
import Description from "../common/Description/Description"

const Offer = () => (
    <section className="offer">
        <div className="offer_title">
            <img src={bgPath} alt="elephant" className="offer_title_bg" />
            <div className="container">
                <h2 className="offer_title_text">Слоновья ферма «Гиппопотам» — 15 лет выращиваем и воспитываем слонов</h2>
                <Button linkBtn="#" linkText="Больше о нас" linkType="btn-white" />
            </div>
        </div>
        <div id="about"></div>
        <Description title='Кто мы такие?' >
            <p>Слоновья ферма <i>«Гиппопотам»</i> — уникальная в своем роде ферма.
            <br />
            Мы не просто выращиваем слонов, но <span>занимаемся их воспитанием</span> и обучением.
            <br />
            Мы учим их жить в современном социуме и помогаем людям найти с ними
            общий язык.</p>
        </Description>
    </section>
)

export default Offer
