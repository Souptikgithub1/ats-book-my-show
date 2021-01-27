import React from 'react';
import {FaCaretDown, FaSistrix, FaUserCircle} from 'react-icons/fa';
import './TopNavBar.scss';
import '../Header.scss';

const TopNavBar = () => {
    return (
        <div className="navbar-top-container">
                <div className="nav-top">
                    
                    <div className="nav-left">
                        <div className="logo">ATS</div>
                        <div className="search-container">
                            <div className="search-icon">
                                <FaSistrix />
                            </div>
                            <input 
                                className="search-input" 
                                type="text" 
                                name="search"
                                placeholder="Search for Movies, Events, Plays, Sports and Activities" />
                        </div>
                    </div>
                    <div className="nav-right">
                        <div className="location anchor">Kolkata <div className="location-carat"><FaCaretDown /></div> </div>
                        <div className="authentication"> 
                            <div className="user-logo">
                                <FaUserCircle />
                            </div>
                            <div className="user-name anchor">
                                Hi, Souptik ...
                            </div>
                         </div>
                    </div>
                
                </div>
            </div>
    )
}

export default TopNavBar
