"use client"
import style from './MenuView.module.css';

export default function Menu() {
    
    return(
        <div className={style.menu}>
            <div className={style.container}>
            <p onClick={()=>console.log("click")}><span>01</span> OVERVIEW </p>
            </div>
            <div className={style.container}>
            <p><span>02</span> INTERNAL STRUCTURE </p>
            </div>
            <div className={style.container}>
            <p><span>03</span> SURFACE GEOLOGY </p>
            </div>
        </div>
    )

};
