import React from 'react'
import Button from '../common/Button/Button'
import Description from "../common/Description/Description"
import './contact.css'

const Contact = function () {
    return (
        <section className='contact' id='contact'>
            <div className="contact-us">
                <Description title='Связаться с нами' />
            </div>
            <div className="contact__follow">
                <Description title='Оставайтесь с нами' />
                <div className="contact__follow_btn">
                    <Button linkBtn="#" linkText="Подписаться" linkType="btn-green-full" />
                </div>
            </div>
        </section>
    )
}

export default Contact