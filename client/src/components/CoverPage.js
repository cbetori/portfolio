import React, { useState, useEffect } from 'react';
import { setStylesId, setStylesClass } from '../utilities/utilities';

const CoverPage = props => {
    const stylesCoverWords = {
        display: 'flex',
        color: 'whitesmoke',
        fontSize: '60pt',
    };

    const stylesCoverDev = {
        marginLeft: '15vw',
        marginTop: '35vh',
        width: 'fit-content',
    };
    const stylesCoverFull = {
        fontSize: '64',
        fontWeight: 'bolder',
    };
    const stylesCoverStack = {
        marginLeft: '35vw',
    };

    useEffect(() => {
        setStylesClass('cover-words', stylesCoverWords);
        setStylesId('cover-dev-wrap', stylesCoverDev);
        setStylesId('cover-full-wrap', stylesCoverFull);
        setStylesId('cover-stack-wrap', stylesCoverStack);
    }, []);

    return (
        <div>
            <div id="cover-wrapper">
                <div id="cover-dev-wrap" className="cover-words">
                    <div id="cover-dev"> Developer.</div>
                </div>
            </div>
            <div id="cover-page">
                <div id="cover-full-wrap" className="cover-words">
                    <div id="cover-full-f">F</div>
                    <div id="cover-full-u">u</div>
                    <div id="cover-full-ll">ll</div>
                </div>
                <div id="cover-stack-wrap" className="cover-words">
                    <div id="cover-stack">Stack</div>
                </div>
            </div>
        </div>
    );
};

export default CoverPage;
