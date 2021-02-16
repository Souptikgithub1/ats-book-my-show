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
            <div className="banner-container">
                <div className="banner">
                    <img src="https://firebasestorage.googleapis.com/v0/b/ats-book-my-show.appspot.com/o/badhaai-do-04-01-2021-02-21-48-258.jpg?alt=media&token=37c32a91-c2f3-486d-aefd-cd321b682504" alt="slide-1"/>
                </div>
                <div className="banner">
                    <img src="https://firebasestorage.googleapis.com/v0/b/ats-book-my-show.appspot.com/o/gift-a-celeb-wish--unlu-class-27-01-2021-08-30-56-089.jpg?alt=media&token=a1473c7b-9bf8-4839-9342-379d56dbbe53" alt="slide-2"/>
                </div>
                <div className="banner">
                    <img src="https://firebasestorage.googleapis.com/v0/b/ats-book-my-show.appspot.com/o/sunburn-campus-at-lovely-professional-university-30-01-2021-12-32-34-679.webp?alt=media&token=d6bd0f1c-1147-4724-ada5-89a10d73bfc5" alt="slide-3"/>
                </div>
            </div>
        </div>
    )
}

export default Header
