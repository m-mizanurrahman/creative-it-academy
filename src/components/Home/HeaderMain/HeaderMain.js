import React from 'react';
import headerPic from '../../../images/head.jpg'

const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Go To The <br/> Next Level</h1>
                <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum eius nobis, natus labore ipsum maxime?</p>
                <button className="btn btn-primary">Hire Us</button>

            </div>
            <div className="col-md-6">
                <img src={headerPic} alt="" className="img-fluid"/>
            </div>

        </main>
    );
};

export default HeaderMain;