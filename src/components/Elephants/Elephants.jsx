import React from 'react'
import Description from "../common/Description/Description"
import Button from '../common/Button/Button'
import imgPath from '../../images/elephants.png'
import './elephants.css'

const Elephants = function () {
    return (
        <section className='elephants' id='elephants'>
            <Description title='Наши слоны' />
            <div className="elephants_block">
                <div className="elephants_block_text">
                    <p className="elephants_block_text_p">
                        Мы выращиваем и воспитываем слонов
                        из Юго-Восточной Азии и Африки. На нашей ферме одновременно проживают 99 слонов
в возрасте от 1 года до 50 лет. Условия содержания слонов на нашей ферме соответствуют всем <span>мировым стандартам</span>.
                </p>
                    <p className="elephants_block_text_p">Слоны — лучшие друзья людей! Это социальные животные, которые легко поддаются дрессировке, верно служат и обладают эмпатией.
                    Мы популяризируем семейство слоновьих
                    и приглашаем всех желающих познакомиться
                    с этими добрыми и милыми животными!
                </p>
                </div>
                <img src={imgPath} className="elephants_block_bg" alt="elephants" />
            </div>
            <div className="elephants_btn">
                <Button linkBtn="#" linkText="Хочу на слоновью ферму!" linkType="btn-green" />
            </div>
        </section>
    )
}

export default Elephants