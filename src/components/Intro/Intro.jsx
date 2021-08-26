import './Intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

const Intro = () => {
    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            typeSpeed: 100,
            backDelay: 1500,
            backSpeed: 80,
            strings:["Front End", "Javascript", "React", "MERN Stack", "Back End"]
        })
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Tugay Demirel</h1>
                    <h3>Freelance <span ref={textRef}></span> Developer</h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Intro
