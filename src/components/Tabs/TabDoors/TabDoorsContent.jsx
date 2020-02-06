import React from 'react';

import cancelImage from '../../../img/images/tab-1-pic.png'

const TabDoorsContent = () => {
    return (
        <div className="container">
            <div className="tab-content">
                <div className="tab-content-details">
                    <h2>If you decide netflix is not for you - no problem, no commitment. Cancel online anytime.</h2>
                    <button className="btn-small">Try it now</button>
                </div>
                <img className="cancelImage" src={cancelImage} alt="" />
            </div>
        </div>
    )
}

export default TabDoorsContent;