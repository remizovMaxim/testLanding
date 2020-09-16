import React from 'react'
import Description from "../common/Description/Description"
import Button from '../common/Button/Button'

import blog1 from '../../images/blog1.png'
import blog2 from '../../images/blog2.png'
import blog3 from '../../images/blog3.png'

import './blog.css'

const Blog = function () {
    return (
        <section className='blog' id='blog'>
            <Description title='Наш блог' />
            <div className="blog_list container">
                <div className="list_item">
                    <div className="item_photo">
                        <img src={blog1} className='item_photo-img' alt="photoStaff" />
                        <div className="item_date">
                            12.11                            
                        </div>
                    </div>
                    <p className="item_name">День рождения слонихи Вики</p>
                    <p className="item_status">Сегодня поздравляем нашу подопечную с праздником!</p>
                </div>
                <div className="list_item">
                    <div className="item_photo">
                        <img src={blog2} className='item_photo-img' alt="photoStaff" />
                        <div className="item_date">
                            12.11                            
                        </div>
                    </div>
                    <p className="item_name">День рождения слонихи Вики</p>
                    <p className="item_status">Сегодня поздравляем нашу подопечную с праздником!</p>
                </div>
                <div className="list_item">
                    <div className="item_photo">
                        <img src={blog3} className='item_photo-img' alt="photoStaff" />
                        <div className="item_date">
                            12.11                            
                        </div>
                    </div>
                    <p className="item_name">День рождения слонихи Вики</p>
                    <p className="item_status">Сегодня поздравляем нашу подопечную с праздником!</p>
                </div>
            </div>
            <div className="blog_btn">
                <Button linkBtn="#" linkText="Хочу на слоновью ферму!" linkType="btn-green-full" />
            </div>
        </section>
    )
}

export default Blog