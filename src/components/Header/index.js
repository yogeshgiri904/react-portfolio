import React from 'react'
import Button from '../UI/Button';
import Me from '../../images/ceo-img.png';

export default function Index() {
    return (
        <>
            <div className="header" id="header">
                <div className="sidebar">
                    <a href="https://www.facebook.com/yogesh.goswami.948011"><span>Facebook</span><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="https://www.instagram.com/radheypandit_"><span>Instagram</span><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href="https://www.linkedin.com/in/yogeshgiri904"><span>LinkedIN</span><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                    <a href="https://github.com/yogeshgiri904"><span>Github</span><i class="fa fa-github-alt" aria-hidden="true"></i></a>
                </div>
                <div className="heading">
                    <p>Hello, I am <span>Yogesh Giri</span></p>
                    <h1>Web Developer</h1>
                    <p><small>A passionate full stack web developer from India.</small></p>
                    <Button label="About Me" anchor="https://github.com/yogeshgiri904" />
                    <Button label="My Resume" inverse={true} anchor="https://drive.google.com/file/d/1h-9jq-u2vKSzScYVeCf3Wpq_V_CgD0R-/view?usp=sharing"/>
                </div>
                <div className="heading-img">
                    <img src={Me} alt="ME"/>
                </div>
            </div>
        </>   
    );
}