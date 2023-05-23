import React from 'react';

const Cost = () => {
    return (
        <div className='bg-cost-color cost-section'>
            <div className="container-fluid px-5">
                <div className="row mb-5">
                    <div className="col-md-7 d-flex align-items-center">
                        <div>
                            <h3 className='mb-3'>Costs</h3>
                            <p className='lead'>Treatments for these types of conditions can be extremely expensive. Ultimately, exposure to firefighting foam could mean a lifetime of suffering—and struggling to pay staggering hospital bills. If this is your experience, it’s time to be proactive about compensation for your pain.</p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img src="../../src/assets/costImg3.jpg" alt="" className='img-fluid img-round' />
                    </div>
                </div>

                <form className="d-flex justify-content-center" role="search">
                    <button className="btn btn-lg btn-warning" type="submit">File a Case Today</button>
                </form>
            </div>
        </div>
    );
};

export default Cost;