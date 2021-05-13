import React from 'react';
import Card from '../UI/Card';
import './style.css';
import Subcard from '../UI/Subcard';
import folio1 from '../../images/port/portfolio-1.jpg';
import folio2 from '../../images/port/portfolio-2.jpg';
import folio3 from '../../images/port/portfolio-3.jpg';
import folio4 from '../../images/port/portfolio-4.jpg';
import folio5 from '../../images/port/portfolio-5.jpg';
import folio6 from '../../images/port/portfolio-6.jpg';
 

const Index = () => {
    const projects=[
        {
            name:"Namaste Messenger",
            img: folio1,
            desc:"Realtime chatting web application having validated login authentication portal.",
            git:"https://github.com/yogeshgiri904/realtime-chat",
            live:"http://srohackers.epizy.com/"
        },
        {
            name:"React Portfolio",
            img: folio6,
            desc:"Everything about my educational journey and technical skills.",
            git:"https://github.com/yogeshgiri904/React-Portfolio",
            live:"https://github.com/yogeshgiri904/React-Portfolio"
        },
        {
            name:"GO Payments Bank",
            img: folio2,
            desc:"A mutual payments web application with credit, debit and passbook feature.",
            git:"https://github.com/yogeshgiri904/go-bank",
            live:"http://gobank.epizy.com/"
        },
        {
            name:"Shri Ram Organization",
            img: folio6,
            desc:"Attractive User Interface website for an online course selling store.",
            git:"https://github.com/yogeshgiri904/shriramorg",
            live:"shriramorg.netlify.app"
        },
        {
            name:"SRO Music",
            img: folio4,
            desc:"A beautiful music player with extreme controls.",
            git:"https://github.com/yogeshgiri904/sro-music",
            live:"https://yogeshgiri904.github.io/sro-music/music.html"
        },
        {
            name:"To-Do Website",
            img: folio5,
            desc:"A note adding website which is able to perform CRUD oprations.",
            git:"https://github.com/yogeshgiri904/to-do",
            live:"https://yogeshgiri904.github.io/to-do"
        },
        {
            name:"Bubble SRO",
            img: folio2,
            desc:"An advance CSS animation website with beasutiful UI.",
            git:"https://github.com/yogeshgiri904/advance-anime",
            live:"https://yogeshgiri904.github.io/advance-anime"
        },
        {
            name:"Javascript Calculator",
            img: folio3,
            desc:"It is an arthmetic calculator with a lovable interface.",
            git:"https://github.com/yogeshgiri904/calculator",
            live:"https://yogeshgiri904.github.io/calculator"
        },
        {
            name:"Circular Slider",
            img: folio6,
            desc:"A very beautiful circular slider with a Hollywood feel.",
            git:"https://github.com/yogeshgiri904/circular-slider",
            live:"https://yogeshgiri904.github.io/circular-slider"
        }
    ]
    return (
        <>
            <Card heading="Project Map" subheading="My latest developments" bgColor="#DAF7A6" content={
                <div>
                    <div className="project-grid">
                        {
                            projects.map((e, index)=>(
                                <Subcard
                                key={index}
                                pname={e.name}
                                pimg={e.img}
                                pdesc={e.desc}
                                pgit={e.git}
                                plive={e.live}/>
                            ))
                        }

                    </div>
                </div>
            }/> 
        </>
    )
}

export default Index;