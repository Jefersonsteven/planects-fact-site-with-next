"use client"
import style from './MenuView.module.css';
import React,{ useState } from 'react';


export default function Menu({setSubmenu}) {

    const handleOptionClick = (option) => {
        setSubmenu(option);
        console.log(`Clickeaste ${option}`)
    };
    
    return(
        <div className={style.menu}>
            <div onClick={()=>handleOptionClick('overview')} className={style.container}>
            <p><span>01</span> OVERVIEW </p>
            </div>
            <div onClick={()=>handleOptionClick('structure')} className={style.container}>
            <p><span>02</span> INTERNAL STRUCTURE </p>
            </div>
            <div onClick={()=>handleOptionClick('geology')} className={style.container}>
            <p><span>03</span> SURFACE GEOLOGY </p>
            </div>
        </div>
    )

};
