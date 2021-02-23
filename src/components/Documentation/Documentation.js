import React from 'react'
import s from '../../App.module.css'
import {NavLink} from "react-router-dom";

const Documentation = (props) => {
    return <div className={s.app}>
        <div className={s.documentation}>
        <h2>This is documentation</h2>
            <div className={s.mainText}>
                This weather app shows you current weather in any city. By default, I set 2 cities.
            But you can also add the city name in the field below. <p>REST API: <a href="https://openweathermap.org/current">https://openweathermap.org/current</a></p>
            </div>
     <NavLink to={'/main'}><button className={s.button}>Go To App</button></NavLink>
        </div>
    </div>
}

export default Documentation