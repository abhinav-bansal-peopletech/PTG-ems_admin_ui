import React from 'react'

export default function EmployeeListNavbar() {
    return (
        <div>

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container-fluid">
                        <a
                        className="navbar-brand me-auto ms-lg-0 ms-3"
                        href="#one"
                        >KeyLogger</a
                        >
                        <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#topNavBar"
                        aria-controls="topNavBar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        >
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="topNavBar">
                        <form className="d-flex ms-auto my-3 my-lg-0">
                            <div className="input-group">
                            <input
                                className="form-control"
                                type="earch"
                                aria-label="Search"
                            />
                            <button className="btn btn-primary" type="submit">
                                <i className="bi bi-search"></i>
                            </button>
                            </div>
                        </form>
                        </div>
                    </div>
                </nav>
        </div>
    )
}
