import React from "react"
import "./counter.css"

const Counter = function () {
  return (
    <section className="counter">
      <div className="counter_block col-6 col-md-4 col-xl-2">
        <p className="counter_block_number">142</p>
        <p className="counter_block_description">слона скуплено</p>
      </div>
      <div className="counter_block col-6 col-md-4 col-xl-2 counter_block-border">
        <p className="counter_block_number">100</p>
        <p className="counter_block_description">счастливых клиентов</p>
      </div>
      <div className="f-50"></div>
      <div className="counter_block col-6 col-md-4 col-xl-2 counter_block-border">
        <p className="counter_block_number">15</p>
        <p className="counter_block_description">международных наград </p>
      </div>
      <div className="f-100"></div>
      <div className="counter_block col-6 col-md-4 col-xl-2 counter_block-border">
        <p className="counter_block_number">99</p>
        <p className="counter_block_description">слонов ждут своих хозяев</p>
      </div>
      <div className="f-50"></div>
      <div className="counter_block col-6 col-md-4 col-xl-2 counter_block-border">
        <p className="counter_block_number">58</p>
        <p className="counter_block_description">проведенных мероприятий</p>
      </div>
      <div className="counter_block col-6 col-md-4 col-xl-2 counter_block-border">
        <p className="counter_block_number">12</p>
        <p className="counter_block_description">проведенных мероприятий</p>
      </div>
    </section>
  )
}

export default Counter
