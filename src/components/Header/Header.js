import React, { useState } from 'react';
import './Header.scss';
import '../../App.scss';
import TopNavBar from './top-navbar/TopNavBar';
import BottomNavBar from './bottom-navbar/BottomNavBar';

const Header = () => {
const [categories] = useState(['Movies',
                                            'Events',
                                            'Plays',
                                            'Sports',
                                            'Activities',
                                            'Fanhood',
                                            'Buzz']);

    const [extras] = useState(['ListYourShow',
                                'Corporates',
                                'Offers',
                                'Gift Cards'
                                    ]);

    return (
        <div className="navbar-container">
            <TopNavBar />
            <BottomNavBar
                categories={categories}
                extras={extras} />
        </div>
    )
}

export default Header
