import React from "react";

const Registration = () => {
    return (
        <div className="container">
            
                    <h2>Registeration Form</h2>
                    <form>
                        <div className="col-md-6 form-floating">
                            <label className="form-label" >Email address</label>
                            <input type="email" id="email" className="form-control" />
                        </div>
<br/>
                        <div className="col-md-6 form-floating">
                            <label className="form-label">Password</label>
                            <input type="password" id="pwd" className="form-control" />
                        </div>
                        <br/>
                        <div className="col-md-6 form-floating">
                            <label className="form-label">Confirm Password</label>
                            <input type="confirmPassword" id="confirm" className="form-control" />
                        </div>
                        <br/>
                        <div class="d-grid col-md-6">
                            <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Register
                            </button>
                        </div>
                       <br/>
                        
                        
                    </form>
                </div>
           
    )
}

    export default Registration