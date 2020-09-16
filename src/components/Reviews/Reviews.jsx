import React from 'react'
import Description from "../common/Description/Description"
import './reviews.css'
import reviewImg1 from '../../images/review1.png'
import reviewImg2 from '../../images/review2.png'
import reviewImg3 from '../../images/review3.png'

const Reviews = function () {
    return (
        <section className='reviews' id='about'>
            <Description title='О нас пишут' />
            <div className="container">
                <div className="reviews_list">
                    <div className="reviews_list_item">
                        <img src={reviewImg1} className='item_avatar' alt="reviewer" />
                        <div className="item_wrapper">
                            <p className="item_wrapper_title">Ангелина, 42 года</p>
                            <p className="item_wrapper_text">«Слоновья ферма — это просто открытие! Моя жизнь еревернулась, когда я прокатилась на слоне. Я поменяла работу, съездила в Африку и купила слонёнка»</p>
                        </div>
                    </div>
                    <div className="reviews_list_item">
                        <img src={reviewImg2} className='item_avatar' alt="reviewer" />
                        <div className="item_wrapper">
                            <p className="item_wrapper_title">Вадим, 35 лет</p>
                            <p className="item_wrapper_text">«Раньше сомневался, стоит ли мне покупать слона. Но после посещения этой фермы перестал колебаться. Теперь это моя мечта»</p>
                        </div>
                    </div>
                    <div className="reviews_list_item">
                        <img src={reviewImg3} className='item_avatar' alt="reviewer" />
                        <div className="item_wrapper">
                            <p className="item_wrapper_title">Вера, 18 лет</p>
                            <p className="item_wrapper_text">«Я хотела завести котика, но после того, как попала в гости к этим слоникам — мои приоритеты полностью сменились. Слоны — хозяева планеты! Хочу слона и точка!»</p>
                        </div>
                    </div>
                </div>
                <div className="reviews-magazines">
                    <div className="magazine">
                        <div className="magazine_block">
                            <span>«</span><p className="magazine_block_text">«Уникальная слоновья ферма! Ради усыновления слоненка сюда приезжают со всего мира.»</p><span>»</span>
                        </div>
                        <p className="magazine_block_name">Магнитогорск Таймс</p>
                    </div>
                    <div className="magazine">
                        <div className="magazine_block">
                            <span>«</span><p className="magazine_block_text">«Уникальная слоновья ферма! Ради усыновления слоненка сюда приезжают со всего мира.»</p><span>»</span>
                        </div>
                        <p className="magazine_block_name">Магнитогорск Таймс</p>
                    </div>                    
                    
                </div>
            </div>
        </section>
    )
}

export default Reviews