import React from "react"
import Description from "../common/Description/Description"
import './views.css'
import view1 from '../../images/view1.png'
import view2 from '../../images/view2.png'
import view3 from '../../images/view3.png'
import view4 from '../../images/view4.png'
import view5 from '../../images/view5.png'
import view6 from '../../images/view6.png'


const Views = function () {
    return (
        <section className="views">
            <Description title='Как всё это выглядит?' />
            <div className="views_puzzle">
                <div className="views_puzzle-big50 views_puzzle-horizontal">
                    <img src={view1} alt="puz" />
                    <div className="views_puzzle-small50">
                        <img src={view2} alt="puz" />
                        <img src={view3} alt="puz" />
                    </div>
                </div>
                <div className="views_puzzle-big50 views_puzzle-vertical">
                    <img src={view4} alt="puz" />
                    <div className="views_puzzle-small50">
                        <img src={view5} alt="puz" />
                        <img src={view6} alt="puz" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Views
