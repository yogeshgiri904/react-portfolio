import React from 'react';
import Skill from './Skill';
import Card from '../UI/Card';

const Index = () => {
    const skills = [
        {
            name:"HTML5/CSS3",
            desc:"Frontend Web Development",
            value:"90",
            pathColor:"orangered",
            textColor:"orangered"
        },
        {
            name:"JavaScript",
            desc:"Frontend Web Development",
            value:"70",
            pathColor:"seagreen",
            textColor:"seagreen"
        },
        {
            name:"C++",
            desc:"Programming Language",
            value:"80",
            pathColor:"teal",
            textColor:"teal"
        },
        {
            name:"Java",
            desc:"Programming Language",
            value:"60",
            pathColor:"purple",
            textColor:"purple"

        },
        {
            name:"PHP",
            desc:"Backend Web Development",
            value:"80",
            pathColor:"crimson",
            textColor:"crimson"
        },
        {
            name:"Laravel 8",
            desc:"Backend Web Development",
            value:"70",
            pathColor:"#283747",
            textColor:"#283747"
        },
        {
            name:"ReactJS",
            desc:"JavaScript Framework",
            value:"70",
            pathColor:"rebeccapurple",
            textColor:"rebeccapurple"
        },
        {
            name:"MySQL",
            desc:"Database Management System",
            value:"80",
            pathColor:"Teal",
            textColor:"Teal"
        }
    ]
    return (
        <>
            <Card heading="What I do" subheading="Specializing In" bgColor="#DAF7A6" content={
                <div className="skill-flex">
                {
                    skills.map((e, index) =>(
                        <Skill
                        key={index}
                        name={e.name}
                        desc={e.desc}
                        value={e.value}
                        pathColor={e.pathColor}
                        textColor={e.textColor}
                        />
                    ))
                }
                </div>
            }/> 
        </>
    )
}

export default Index;