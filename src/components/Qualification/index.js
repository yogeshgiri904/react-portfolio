import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Card from '../UI/Card';
import WorkIcon from '../UI/WorkIcon';

export default function Index() {
    return (
        <div>
            <Card heading="Qualification Details" subheading="My Educational Journey" bgColor="#DAF7A6" content={
                <div>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="2018 - present"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<WorkIcon inverse={true}/>}
                        >
                            <h3 className="vertical-timeline-element-title">Bachlor of Technology in Computer Science & Engineering</h3>
                            <h4 className="vertical-timeline-element-subtitle">Lovely Professional University, Punjab</h4>
                            <p>
                            I have learnt many technical and interpersonal skills here and always eager to learn new ones. I am good at various programming languages and have a strong background in Full Stack Web development.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2016 - 2017"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            icon={<WorkIcon inverse={false} />}
                        >
                            <h3 className="vertical-timeline-element-title">Higher Secondary School - XII</h3>
                            <h4 className="vertical-timeline-element-subtitle">Jawahar Navodaya Vidhyalaya, Etah</h4>
                            <p>
                            Jawahar Navodaya Vidyalayas are the educational organization run under the Ministry of Education, Government of India.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2014 - 2015"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            icon={<WorkIcon inverse={false} />}
                        >
                            <h3 className="vertical-timeline-element-title">Secondary School - X</h3>
                            <h4 className="vertical-timeline-element-subtitle">Jawahar Navodaya Vidhyalaya, Etah</h4>
                            <p>
                            Jawahar Navodaya Vidyalayas are the educational organization run under the Ministry of Education, Government of India.
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
            </div>
            } />
            
        </div>   
    );
}