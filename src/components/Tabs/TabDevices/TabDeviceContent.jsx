import React from 'react';
import styled from 'styled-components';

import { Buttom } from '../../Buttom/Button';

import tvImage from '../../../img/images/tab-tv.png';
import macImage from '../../../img/images/tab-macbook.png';
import tabletImage from '../../../img/images/tab-tablet.png';

const TabDeviceContent = () => {
    return (
        <Container>
            <div className="tab-top-content">
                <h2>Watch TV shows and movies anytime, anywhere-- <br/> personalized for you.</h2>
                <Buttom>Try it now</Buttom>
            </div>

            <div className="tab-main-content">
                <div>
                    <img src={tvImage} alt=""/>
                    <h3>Watch on your TV</h3>
                    <p>Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                <div>
                    <img src={macImage} className="macImage" alt=""/>
                    <h3>Use any computer</h3>
                    <p>Available on phone and tablet, whenever you go</p>
                </div>
                <div>
                    <img src={tabletImage} alt=""/>
                    <h3>Watch instantly or download for later</h3>
                </div>
            </div>
        </Container>
    )
}

export const Container = styled.div`
    background-color: var(--main-deep-dark);
    padding: 6rem 0;

    .tab-top-content {
        display: flex;
        // justify-content: space-between;
        // align-items: center;

        h2 {
            font-size: 2.5rem;
            line-height: 1.5;
            font-weight: normal;
            color: var(--color-text);
            margin-bottom: 4rem;
        }
    }

    .tab-main-content, .tab-top-content {
        margin: 0 15% 3.5rem 15%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .tab-main-content {

        img {
            width: 100%;
        }

        .macImage{
            width: 90%;
            text-align: center;
        }

        div {
            width : 33.3333%;

            
        }
    }



`;


export default TabDeviceContent;
