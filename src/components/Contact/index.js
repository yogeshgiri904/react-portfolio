import React from 'react';
import Card from '../UI/Card';
import Form from '../UI/Form';

const Index = () => {
    return (
        <>
            <Card heading="Contact Me" subheading="Do you have any queries ?" bgColor="#DAF7A6" content={
                <div className="contact-form">
                    <form autocomplete="off" action="">
                        <Form fort={true} ftitle="Name" ftype="text" fplaceholder="Enter Your Name" fname="Name"/>
                        <Form fort={true} ftitle="Email" ftype="email" fplaceholder="Enter Your Email" fname="email"/>
                        <Form fort={false} ftitle="Message" fplaceholder="Type Your Message..." fname="Message"/>
                        <Form fort={true} ftype="Submit" fname="Submit"/>
                    </form>
                </div>
            }/>    
        </>
    )
}

export default Index;