import React from "react";

const Login = () => {
    return (
        <div className="container">
            
                    <h2>Login</h2>
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
                        <div class="d-grid col-md-6">
                            <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">LogIn
                            </button>
                        </div>
                       <br/>
                        
                        <div class="container col-md-12">
                        
                            <span className="col-md-6">Not a member? <a href="#!">Register</a></span> <span>|</span>
                        
                            <span class="col-md-6">Forgot <a href="#">password?</a></span>
                        </div>
                    </form>
                </div>
           
    )
}

    export default Login