import React from 'react'
import Description from "../common/Description/Description"
import Button from '../common/Button/Button'

import './blog.css'

const Blog = function () {
    return (
        <section className='blog' id='blog'>
            <Description title='Наш блог' />
            <div className="blog_btn">
                <Button linkBtn="#" linkText="Больше о нас" linkType="btn-green-full" />
            </div>
        </section>
    )
}

export default Blog