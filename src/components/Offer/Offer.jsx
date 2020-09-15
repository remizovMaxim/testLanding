import React from "react"
import './offer.css'
import bgPath from '../../images/offer-background.png'
import Button from "../common/Button/Button"

const Offer = () => (
    <section className='offer'>
        <div className="offer_title">
            <img src={bgPath} alt="elephant" className='offer_title_bg' />
            <div className="container">
                <h2 className="offer_title_text">   Слоновья ферма «Гиппопотам» —
   15 лет выращиваем и воспитываем слонов</h2>
                <Button linkBtn='#' linkText='Больше о нас' linkType='btn-white' />
            </div>
        </div>
        <div className="offer_description">
            <h3 className="offer_description_title">Кто мы такие?</h3>
            <p className="offer_description_text">Слоновья ферма «Гиппопотам» — уникальная в своем роде ферма.
            Мы не просто выращиваем слонов, но <span>занимаемся их воспитанием</span> и обучением.
Мы учим их жить в современном социуме и помогаем людям найти с ними общий язык. </p>
            <Button linkBtn='#' linkText='Больше о нас' linkType='btn-green' />
            <Button linkBtn='#' linkText='Больше о нас' linkType='btn-green-full' />
        </div>
    </section>
)

export default Offer