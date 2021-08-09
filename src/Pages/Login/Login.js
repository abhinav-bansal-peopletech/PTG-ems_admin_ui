import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default function Login() {
    return (

        <div className = "container-fluid bg">
            <div className = "row justify-content-center">
                <div className = "col-12 col-sm-6 col-md-3">
                <form className="form-container">
                    <div className="mb-3 form-group">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3 form-group">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="current-password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg Lbtn"><Link className="link" exatct="true" to="/employeelist">Submit</Link></button>
                </form>
            </div>
            </div>
        </div>
    )
}
