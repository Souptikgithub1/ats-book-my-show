import React from 'react';
import './BottomNavBar.scss';

const BottomNavBar = ({categories,  extras}) => {
    return (
        <div className="navbar-bottom-container">
            <div className="nav-bottom">
            <div className="nav-left">
                {categories.map((c, i) => <span className="category anchor" key={i}>{c}</span>)}
            </div>
            <div className="nav-right">{extras.map((e, i) => <span className="extras anchor" key={i}>{e}</span>)}</div>
            </div>
        </div>
    )
}

export default BottomNavBar
