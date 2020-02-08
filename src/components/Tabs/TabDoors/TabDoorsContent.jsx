import React from 'react';

import { Button } from '../../Button/Button';

import cancelImage from '../../../img/images/tab-1-pic.png'

const TabDoorsContent = () => {
    return (
        <div className="container">
            <div className="tab-content">
                <div className="tab-content-details">
                    <h2>If you decide netflix is not for you - no problem, no commitment. Cancel online anytime.</h2>
                    <Button className="btn-small">Try it now</Button>
                </div>
                <img className="cancelImage" src={cancelImage} alt="" />
            </div>
        </div>
    )
}

export default TabDoorsContent;