import './css/home.css';
import React, {useState} from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    const handleUpClick = ()=>{
        document.getElementById("menu-list").classList.toggle("show");
    }
    const togalUpClick = ()=>{
        document.body.classList.toggle('dmode');
        if (text=="https://telegra.ph/file/bc7c99222655447fe0700.jpg") {
            setText("https://avatars.githubusercontent.com/u/79676239?s=400&u=50ed13d45e13500fd65b3b84b4f64276d6313ea8&v=4")
            setText1("light")}
        else{
            setText("https://telegra.ph/file/bc7c99222655447fe0700.jpg")
            setText1("dark")
        }
    }

}