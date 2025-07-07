import React from "react";
import { Link } from "react-router-dom";

const Index = ({name}) =>{
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 admin-nav">
                        <nav>
                            <Link to={'/Admin'} className="admin-links">Dashboard</Link>
                            <Link to={'/Add-Food'} className="admin-links">Add Food</Link>
                            <Link to={'/'} className="admin-links">View Food</Link>
                            <div style={{display:'block', float:'right'}}>
                                <Link to={''} className="admin-links">Logout</Link>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-12">
                        <h1 className="text-white">{name}</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index