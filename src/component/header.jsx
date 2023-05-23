import React from 'react';

const Header = () => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzTthWLK67-gW6a_mHQzI35PB_2xpvXUsM_bveJtEbINjn_SWS3UMBgUPV4ILnD5eR5AA/exec'
    const form = document.forms['leadform']

    const submit = (e) => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => alert("Thank you! your form is submitted successfully."))
            .then(() => { window.location.reload(); })
            .catch(error => console.error('Error!', error.message))
    }

    return (
        <div className='bgImage'>
            <div className="container-fluid px-5">
                <div className="row">
                    <div className="col-md-7">
                        <div className='content-wrapper'>
                            <div>
                                <h1 className='header-title'>Firefighting Foam: <br />Lifesaving or Lethal?</h1>
                                <p className='header-subtitle'>Just because civilians & service members use foam to save lives and property does not mean the substance itself is safe.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className='content-wrapper cus-form p-5'>
                            <form onSubmit={submit} method='POST' name='leadform' id='leadform'>
                                <h6 className='text-center'>YOU MAY QUALIFY FOR SIGNIFICANT COMPENSATION</h6>
                                <hr />

                                <label htmlFor="" class="form-label">How were you exposed to firefighting foam (AFFF)?</label>
                                <select class="form-select mb-3" name='AFFF' aria-label="Default select example">
                                    <option selected>Select</option>
                                    <option value="Civilian">Civilian firefighter</option>
                                    <option value="Military">Military firefighter</option>
                                    <option value="Airport">Airport Personnel</option>
                                    <option value="Other">Other</option>
                                </select>

                                <label htmlFor="" class="form-label">Did you or a loved one develop any of the these cancers following the exposure?</label>
                                <select class="form-select mb-3" name='Cancer' aria-label="Default select example">
                                    <option selected>Selete</option>
                                    <option value="Kedney">Kedney Cancer</option>
                                    <option value="Pancreatic">Pancreatic Cancer</option>
                                    <option value="Testicular">Testicular Cancer</option>
                                    <option value="Prostate">Prostate Cancer</option>
                                    <option value="Bladder">Bladder Cancer</option>
                                    <option value="Thryroid">Thryroid Cancer</option>
                                    <option value="Liver">Liver Cancer</option>
                                </select>

                                <label htmlFor="" class="form-label">Do you already have an attorney representing this case?</label>
                                <select class="form-select mb-3" name='Attorney' aria-label="Default select example">
                                    <option selected>Selete</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>

                                <div className='row mb-3'>
                                    <div className="col-md-6">
                                        <label for="first" class="form-label">First Name</label>
                                        <input type="text" name="firstName" class="form-control" id="first" />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="last" class="form-label">Last Name</label>
                                        <input type="text" name='lastName' class="form-control" id="last" />
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="text" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className='row'>
                                    <div className="col-md-6">
                                        <label for="phone" class="form-label">Phone</label>
                                        <input type="number" name='phone' class="form-control" id="phone" />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="zip" class="form-label">ZIP Code</label>
                                        <input type="number" name='zip' class="form-control" id="zip" />
                                    </div>
                                </div>

                                <button type="submit" class="btn btn-primary mt-3">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;