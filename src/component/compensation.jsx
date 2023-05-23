import React from 'react';
import compensationImg1 from "../../src/assets/nextStepImg.jpg";

const Compensation = () => {
    return (
        <div className='container-fluid px-5' id='compensation'>
            <div className='d-flex justify-content-center pad-top-80'>
                <h4 className='display-6'>Qualifying for Compensation</h4>
            </div>
            <div className='my-5'>
                <p className='lead'>There are many people beyond firefighters who come into daily contact with firefighting foam and similar fire-retardant chemicals. Persons under significant threat of fire may work in an environment laced with carcinogenic preventative measures. This is especially prevalent in the military, aeronautic, or construction industries.</p>

                <p className='lead'>Exposure does not have to be job-related. Firefighting foam can affect entire communities through drinking water contaminated by chemical runoff. However, most people with a clear link between the contaminant and their condition experienced prolonged exposure.</p>

                <p className='lead'>To qualify, you need to prove that dangerous chemicals from firefighting foam were in your surroundings at high levels—and that you have a directly related injury.</p>
            </div>

            <div>
                <div className='row my-5 pad-top-80'>
                    <div className="col-md-6">
                        <img src={compensationImg1} alt="" className='img-fluid img-round' />
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div>
                            <h3>Your Next Steps</h3>
                            <p className='lead'>The Agency for Toxic Substances and Disease Registry (a division of the CDC) states that exposure to PFAS is a public health concern. The CDC is currently investigating the downstream health effects of PFAS and firefighting foam. Despite this, many companies continue to sell and use PFOA products.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Compensation;