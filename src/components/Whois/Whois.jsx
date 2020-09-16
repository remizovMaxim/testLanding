import React from 'react'
import Description from "../common/Description/Description"
import './whois.css'

const Whois = function() {
    return (
        <section className='whois'>
            <Description title='Кто мы такие?'>
                <p>В нашей команде собрались профессионалы и фанаты своего дела. У нас большой опыт работы в сфере разведения и воспитания слонов!</p>
            </Description>
        </section>
    )
}

export default Whois