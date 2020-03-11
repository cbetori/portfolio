import React, { useEffect } from 'react';
import Button from './Button';
import { setStylesClass } from '../utilities/utilities';

const Header = () => {
    let handleScroll = () => {
        if (window.scrollY > 100) {
            document.getElementById('name').style.visibility = 'hidden';
        } else {
            document.getElementById('name').style.visibility = 'visible';
        }
    };
    window.addEventListener(
        'scroll',
        () => {
            handleScroll();
        },
        false
    );

    const stylesHeader = {
        fontWeight: 'bolder',
        background: ' rgba(250,250,250,.85) ',
        color: 'black',
        display: 'inline-flex',
        height: '100px',
        justifyContent: 'space-around',
        position: 'fixed',
        width: '100vw',
    };

    const stylesContent = {
        display: 'inline-flex',
        width: '95vw',
    };

    const stylesThird = {
        alignItems: 'center',
        display: 'inline-flex',
        width: '33.33%',
    };

    const stylesLeft = {
        fontFamily: 'Raleway, sans-serif',
        fontSize: '36pt',
    };

    let handleClick = id => {
        console.log('click');
        let element = document.getElementById(id).offsetTop;
        window.scrollTo({ top: element - 100, behavior: 'smooth' });
    };

    useEffect(() => {
        setStylesClass('header', stylesHeader);
        setStylesClass('header-content', stylesContent);
        setStylesClass('header-third', stylesThird);
        setStylesClass('header-left', stylesLeft);
    }, []);

    return (
        <div id="header" style={{ height: '100px' }}>
            <div className="header">
                <div className="header-content">
                    <div id="name" className="header-left header-third">
                        {/* Collin Betori */}
                    </div>
                    <div className="header-center header-third"></div>
                    <div className="header-right header-third">
                        <Button
                            onClick={e => handleClick('about')}
                            value="About"
                        />
                        <Button
                            onClick={e => handleClick('projects')}
                            value="Projects"
                        />
                        <Button
                            onClick={e => handleClick('skills')}
                            value="Skill Set"
                        />
                        <Button
                            onClick={e => handleClick('education')}
                            value="Education"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
