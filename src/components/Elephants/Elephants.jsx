import React from 'react'
import Description from "../common/Description/Description"
import Button from '../common/Button/Button'
import imgPath from '../../images/elephants.png'
import './elephants.css'

const Elephants = function () {
    return (
        <section className='elephants' id='elephants'>
            <Description title='Наши слоны' />
            <img src={imgPath} alt="elephants" />
            <div className="elephants_btn">
                <Button linkBtn="#" linkText="Хочу на слоновью ферму!" linkType="btn-green" />                
            </div>
        </section>
    )
}

export default Elephants