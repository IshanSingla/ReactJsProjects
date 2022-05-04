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
            setText("https://avatars.githubusercontent.com/u/79676239?s=400&u=50ed13d45e13500fd65b3b84b4f64276d6313ea8&v=4")}
        else{
            setText("https://telegra.ph/file/bc7c99222655447fe0700.jpg")
        }
    }
    const [text, setText] = useState('https://avatars.githubusercontent.com/u/79676239?s=400&u=50ed13d45e13500fd65b3b84b4f64276d6313ea8&v=4'); 
    return(
        <>
        <div className="wrapper">
            <div className="toggle">
            <input className="toggle-input" type="checkbox" onClick={togalUpClick}/>
            <div className="toggle-bg"></div>
            <div className="toggle-switch">
                <div className="toggle-switch-figure"></div>
                <div className="toggle-switch-figureAlt"></div>
            </div>
            </div>
        </div>
        <section className="main">
            <div className="container">
            <div className="top">
                <div className="k-wrap">
                    
                    <div className="menu" onClick={handleUpClick}>
                        <div className="a"></div>
                        <div className="b"></div>
                        <div className="c"></div>
                    </div>
                    <div id="menu-list" className="menu-li">
                        <a href="https://twitter.com/IshanSingla_xD" target="_blank">Twitter</a>
                        <a href="https://instagram.com/Is_Ishan_Singla" target="_blank">Instagram</a>
                        <a href="https://www.linkedin.com/in/itz-ishansingla" target="_blank">Linkedin</a>
                        <a href="https://github.com/IshanSingla" target="_blank">Github</a>
                        <a href="https://www.youtube.com/c/IshanSingla" target="_blank">You Tube</a>
                    </div>
                </div>

                <div className="email">
                    <a href="mailto:is.ishan.singla@gmail.com" ><i className="far fa-envelope"></i></a>
                </div>

                <div className="logo">
                    <a href="https://github.com/IshanSingla" target="_blank">
                        <img src={text} />
                        {/* <img id="ishan" src="https://telegra.ph/file/bc7c99222655447fe0700.jpg"> */}
                        <div className="image__overlay image__overlay--primary">
                        <i className="fas fa-code"></i>
                        </div>
                    </a>
                </div>
                <div className="name">
                    <h2>Ishan Singla</h2>
                    <p>@IshanSingla</p>
                
                </div>
            </div>
            <div className="bottom">
                <div className="details">
                    <h2>About</h2>

                    <isha>
                        <p className="info" >Python Developer |•| Android Devloper |•|</p>
                    </isha>
                
                </div>
                <div className="social">
                    <a href="https://twitter.com/IshanSingla_xD" target="_blank"><i className="fab fa-twitter"></i></a>
                    <a href="https://instagram.com/Is_Ishan_Singla" target="_blank"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/itz-ishansingla" target="_blank"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/IshanSingla" target="_blank"><i className="fab fa-github"></i></a>
                    <a href="https://www.youtube.com/c/IshanSingla" target="_blank"><i className="fab fa-youtube"></i></a>
                </div>
                <div className="btns">
                    <Link to="/about"><div className="btn1"><a className="follow" >ABOUT</a></div></Link>
                    <Link to="/api"><div className="btn2"><a className="more">API</a></div></Link>
                    <Link to="/YouTube"><div className="btn2"><a className="more" href="/YouTube">YT</a></div></Link>
                </div>
            </div>
            </div>
        </section>
        </>
    )
}