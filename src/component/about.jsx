import React from 'react';
import { BsFill1CircleFill, BsFill2CircleFill } from 'react-icons/bs';

import fireman1 from "../../src/assets/firemanAbout.jpg"
import fireman2 from "../../src/assets/aboutImg2.jpg"
const About = () => {
    return (
        <div className='container-fluid px-5' id='about'>
            <div className='d-flex justify-content-center pad-top-80'>
                <h4 className='display-6'>ABOUT</h4>
            </div>
            <div className='row my-5'>
                <div className="col-md-6 d-flex align-items-center">
                    <div>
                        <h3>PFAS</h3>
                        <p className='lead'>Firefighting foam contains substances called PFAS. Certain types of PFAS, such as PFOA and PFOS, can be toxic. There are two primary reasons why:</p>
                        <div className='d-flex '>
                            <span className='icon-size'>
                                <BsFill1CircleFill />
                            </span>
                            <div>
                                <h4 className='mt-1'>Forever Chemicals</h4>
                                <p className='lead'>These types of PFAS are often known as 'forever chemicals' because they do not break down in the environment or human bodies. The ramifications for health could be life-long.</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <span className='icon-size'>
                                <BsFill2CircleFill />
                            </span>
                            <div>
                                <h4 className='mt-1'>Carcinogens</h4>
                                <p className='lead'>These chemicals have also been proven to be carcinogenic.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={fireman1} alt="" className='img-fluid img-round' />
                </div>
            </div>

            <div className='row my-5 pad-top-80'>
                <div className="col-md-6">
                    <img src={fireman2} alt="" className='img-fluid img-round' />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <div>
                        <h3>Health Concerns</h3>
                        <p className='lead'>Firefighting foam contains substances called PFAS. Certain types of PFAS, such as PFOA and PFOS, can be toxic. There are two primary reasons why:</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;