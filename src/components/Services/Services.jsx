import React from "react"
import Description from "../common/Description/Description"
import Button from "../common/Button/Button"

import "./services.css"
import card1 from "../../images/card1.png"
import card2 from "../../images/card2.png"
import card4 from "../../images/card4.png"
import card5 from "../../images/card5.png"
import card6 from "../../images/card6.png"

const Services = function () {
  return (
    <section className="services" id="services">
      <Description title="Наши услуги">
        <p>
          Мы предоставляем полный спектр услуг: от катания на слонах до помощи
          оформления документов на их усыновление. Оставляйте заявку, наши
          специалисты помогут вам определиться и выбрать лучшее предложение.{" "}
        </p>
      </Description>
      <div className="services_list">
        <div className="list_card list_card-quad">
          <img src={card1} className="list_card_bg" alt="background" />
          <div className="list_card_hover"></div>
          <h4 className="list_card_title">Слоновья ферма</h4>
          <p className="list_card_text">
            Популярное развлечение и интересная активность для корпоративов и
            деловых встреч.
          </p>
        </div>
        <div className="list_card list_card-other">
          <img src={card2} className="list_card_bg" alt="background" />
          <div className="list_card_hover"></div>
          <h4 className="list_card_title">Слонотерапия</h4>
          <p className="list_card_text">
            Популярное развлечение и интересная активность для корпоративов и
            деловых встреч.
          </p>
        </div>
        <div className="list_card list_card-quad">
          <img src={card4} className="list_card_bg" alt="background" />
          <div className="list_card_hover"></div>
          <h4 className="list_card_title">Катание на слонах</h4>
          <p className="list_card_text">
            Популярное развлечение и интересная активность для корпоративов и
            деловых встреч.
          </p>
        </div>
        <div className="list_card list_card-quad">
          <img src={card5} className="list_card_bg" alt="background" />
          <div className="list_card_hover"></div>
          <h4 className="list_card_title">Слоновья ферма</h4>
          <p className="list_card_text">
            Популярное развлечение и интересная активность для корпоративов и
            деловых встреч.
          </p>
        </div>
        <div className="list_card list_card-other">
          <img src={card6} className="list_card_bg" alt="background" />
          <div className="list_card_hover"></div>
          <h4 className="list_card_title">Слоновья ферма</h4>
          <p className="list_card_text">
            Популярное развлечение и интересная активность для корпоративов и
            деловых встреч.
          </p>
        </div>
        <div className="list_card list_card-quad">
          <img src={card2} className="list_card_bg" alt="background" />
          <div className="list_card_hover"></div>
          <h4 className="list_card_title">Слоновья ферма</h4>
          <p className="list_card_text">
            Популярное развлечение и интересная активность для корпоративов и
            деловых встреч.
          </p>
        </div>
      </div>
      <div className="services_btn">
        <Button
          linkBtn="#"
          linkText="Хочу на слоновью ферму!"
          linkType="btn-green"
        />
      </div>
    </section>
  )
}

export default Services
