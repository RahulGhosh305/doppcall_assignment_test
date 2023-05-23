import React from 'react';

const Header = () => {
    return (
        <div className='bgImage'>
            <div className="container-fluid px-5">
                <div className="row">
                    <div className="col-md-7">
                        <div className='content-wrapper'>
                            <h1 className='header-title'>Firefighting Foam: <br />Lifesaving or Lethal?</h1>
                            <p className='header-subtitle'>Just because civilians & service members use foam to save lives and property does not mean the substance itself is safe.</p>
                        </div>
                    </div>
                    <div className="col-md-5"></div>
                </div>
            </div>
        </div>
    );
};

export default Header;