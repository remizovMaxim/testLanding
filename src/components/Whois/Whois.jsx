import React from 'react'
import Description from "../common/Description/Description"
import './whois.css'
import whois1 from '../../images/whois1.png'
import whois2 from '../../images/whois2.png'
import whois3 from '../../images/whois3.png'
import inst from '../../images/inst.png'
import { Link } from 'gatsby'


const Whois = function () {
    return (
        <section className='whois'>
            <Description title='Кто мы такие?'>
                <p>В нашей команде собрались профессионалы и фанаты своего дела. У нас большой опыт работы в сфере разведения и воспитания слонов!</p>
            </Description>
            <div className="whois_list container">
                <div className="list_item">
                    <div className="item_photo">
                        <img src={whois1} className='item_photo' alt="photo" />
                        <div className="item_photo-hover">
                            <Link to='#'><img src={inst} className='item_photo-hover_icon' alt="icon" /></Link>
                            <Link to='#'><img src={inst} className='item_photo-hover_icon' alt="icon" /></Link>
                            <Link to='#'><img src={inst} className='item_photo-hover_icon' alt="icon" /></Link>
                            <Link to='#'><img src={inst} className='item_photo-hover_icon' alt="icon" /></Link>
                        </div>
                    </div>
                    <p className="item_name">Марта Смирнова</p>
                    <p className="item_status">Слоновий заводчик и воспитатель</p>
                </div>
                <div className="list_item">
                    <div className="item_photo">
                        <img src={whois1} className='item_photo' alt="photo" />
                        <div className="item_photo-hover">
                            <Link to='#'><img src={inst} className='item_photo-hover_icon' alt="icon" /></Link>
                            <Link to='#'><img src={inst} className='item_photo-hover_icon' alt="icon" /></Link>
                            <Link to='#'><img src={inst} className='item_photo-hover_icon' alt="icon" /></Link>
                            <Link to='#'><img src={inst} className='item_photo-hover_icon' alt="icon" /></Link>
                        </div>
                    </div>
                    <p className="item_name">Марта Смирнова</p>
                    <p className="item_status">Слоновий заводчик и воспитатель</p>
                </div>
                <div className="list_item">
                    <div className="item_photo">
                        <img src={whois1} className='item_photo' alt="photo" />
                        <div className="item_photo-hover">
                            <Link to='#'><img src={inst} className='item_photo-hover_icon' alt="icon" /></Link>
                            <Link to='#'><img src={inst} className='item_photo-hover_icon' alt="icon" /></Link>
                            <Link to='#'><img src={inst} className='item_photo-hover_icon' alt="icon" /></Link>
                            <Link to='#'><img src={inst} className='item_photo-hover_icon' alt="icon" /></Link>
                        </div>
                    </div>
                    <p className="item_name">Марта Смирнова</p>
                    <p className="item_status">Слоновий заводчик и воспитатель</p>
                </div>


            </div>
        </section>
    )
}

export default Whois