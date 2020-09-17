import { Link } from 'gatsby'
import React from 'react'
import Description from "../common/Description/Description"
import './contact.css'
import iconEmail from '../../images/icon-email.png'

const Contact = function () {
    return (
        <section className='contact' id='contact'>
            <div className="contact-us">
                <Description title='Связаться с нами' />
                <div className="contact-us_col">
                    <svg className='phone-icon' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="60" height="60" viewBox="0 0 60 60"><g><g><image width="60" height="60" xlinkHref="data:image/png;base64,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" /></g></g></svg>
                    <Link to='tel:+74956496219'>+7 495 649-62-19</Link>

                    <img src={iconEmail} alt="email-icon" />
                    <Link to='mailto:team@emailmatrix.ru'>team@emailmatrix.ru  </Link>
                </div>
                <div className="contact-us_col">
                    <p className="city">МОСКВА ВОСТОК</p>
                    <p className="address">109428, 1-й Вязовский пр-д., 4, стр. 19</p>
                    <p className="city">МОСКВА ЮГ</p>
                    <p className="address">117403, 31-й км МКАД, влад. 12</p>
                    <p className="city">МОСКВА ТЕРМИНАЛ М</p>
                    <p className="address">117403, 31-й км МКАД, Востряковский пр., д. 10Г</p>
                </div>
            </div>
            <div className="contact__follow">
                <Description title='Оставайтесь с нами'>
                    <p>Подпишитесь на наши рассылки, чтобы быть всегда в курсе дел команды и ставить лайки нашим питомцам.</p>
                </Description>
                <form action="" className="form">
                    <input type="text"/>
                    <input type="text"/>
                    <button className='button btn-green-full' style={{cursor:'pointer'}}>Подписаться</button>
                </form>                
            </div>
        </section>
    )
}

export default Contact