import React from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-3.svg'
import TextPressure from '../textpressure';

const data = [
    {
        id: 1,
        image: Image1,
        title: "Responsive design",
        description:
            "Ensuring that the website/mobile app is responsive across all platforms",
    },
    {
        id: 2,
        image: Image2,
        title: "Web Development",
        description:
            "Ensuring that that a website meets the correct standards, and also ensuring it's well maintained",
    },
    {
        id: 3,
        image: Image3,
        title: "Fullstack Development",
        description:
            "Building full-stack web applications with a focus on scalability, integration, and security.",
    },
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <div style={{position: 'relative', height: '300px', width: '80%', margin: '0 auto -2rem auto'}}>
                <TextPressure
                  text="Services"
                  flex={true}
                  alpha={false}
                  stroke={false}
                  width={true}
                  weight={true}
                  italic={true}
                  textColor="var(--title-color)"
                  strokeColor="#ff0000"
                  minFontSize={36}
                />
            </div>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt='' className='services__img' width="80" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services