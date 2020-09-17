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
                    <img src={view1} style={{height: '50%', width: '100%'}} alt="puz" />
                    <div className="views_puzzle-small50" style={{height: '50%'}}>
                        <div><img src={view2} alt="puz" /></div>                        
                        <div><img src={view3} alt="puz" /></div>
                    </div>
                </div>
                <div className="views_puzzle-big50 views_puzzle-vertical">
                    <img src={view4} alt="puz" style={{width: '50%', objectFit:'cover'}}/>
                    <div className="views_puzzle-small50" style={{width: '50%', height:'100%'}}>
                        <div style={{height:'50%'}}><img src={view5} alt="puz" /></div>
                        <div style={{height:'50%'}}><img src={view6} alt="puz" /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Views
