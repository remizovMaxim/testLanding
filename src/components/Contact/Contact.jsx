import { Link } from 'gatsby'
import React from 'react'
import Description from "../common/Description/Description"
import './contact.css'
import iconEmail from '../../images/icon-email.png'
import iconPhone from '../../images/icon-phone.png'

const Contact = function () {
    return (
        <section className='contact' id='contact'>
            <div className="contact-us">
                <Description title='Связаться с нами' />
                <div className="container columns">
                    <div className="contact-us_col">
                        <div>                            
                            <img className='phone-icon' src={iconPhone} alt="email-icon" />
                            <Link to='tel:+74956496219' className='phone-number'>+7 495 649-62-19</Link>
                        </div>
                        <div>
                            <img className='email-icon' src={iconEmail} alt="email-icon" />
                            <Link to='mailto:team@emailmatrix.ru' className='email-link'>team@emailmatrix.ru  </Link>
                        </div>
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
            </div>
            <div className="contact__follow">
                <Description title='Оставайтесь с нами'>
                    <p>Подпишитесь на наши рассылки, чтобы быть всегда в курсе дел команды и ставить лайки нашим питомцам.</p>
                </Description>
                <div className="container">
                    <form action="" className="form">
                        <div>
                            <input type="text" className='input' />
                            <input type="text" className='input' />
                        </div>
                        <button className='button btn-green-full' style={{ cursor: 'pointer' }}>Подписаться</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact