import React from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const loginadmin = () => {

        return (
            <div className="container" style = {{marginTop:"50px"}}>
                <div className="row justify-content-center">
                        <div className="col-md-6">
                        <Col sm="8" md={{ size: 'auto', offset: 3 }}><h2>LOGIN ADMIN </h2></Col>
                            <form>
                                <div className="form-group">
                                    <label >Username </label>
                                     <input type="email" className="form-control"  placeholder="Masukan username" />
                                </div>
                                <div className="form-group">
                                    <label >Password</label>
                                    <input type="password" className="form-control"  placeholder="Masukan Password" />
                                </div>
                                    <Link to="/useeffects"button type="submit" class="btn btn-primary btn-lg btn-block">M A S U K</Link>   
                            </form>
                        </div>
                </div>
                </div>
         );
    }

export default loginadmin ;