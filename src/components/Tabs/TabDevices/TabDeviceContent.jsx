import React from 'react';
import styled from 'styled-components';

import { Button } from '../../Button/Button';

import tvImage from '../../../img/images/tab-tv.png';
import macImage from '../../../img/images/tab-macbook.png';
import tabletImage from '../../../img/images/tab-tablet.png';

const TabDeviceContent = () => {
    return (
        <Container>
            <div className="tab-top-content">
                <h2>Watch TV shows and movies anytime, anywhere<br/> personalized for you.</h2>
                <Button className="tryBtn">Try it now</Button>
            </div>

            <div className="tab-main-content">
                <div>
                    <img src={tvImage} alt=""/>
                    <h3>Watch on your TV</h3>
                    <p>Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                <div>
                    <img src={tabletImage} className="tabletImage" alt=""/>
                    <h3>Watch instantly or download for later</h3>
                    <p>Available on phone and tablet, whenever you go</p>
                </div>
                <div>
                    <img src={macImage} className="macImage" alt=""/>
                    <h3>Use any computer</h3>
                    <p>Whatch right on netflix.com</p>
                </div>
                
            </div>
        </Container>
    )
}

export const Container = styled.div`
    background-color: var(--main-deep-dark);
    padding: 6rem 0;

    .tab-top-content {
        margin-bottom: 4rem;
        display: grid;
        grid-template-columns: repeat(8,1fr);
        grid-gap:3rem;

        h2 {
            font-size: 2.5rem;
            line-height: 1.5;
            font-weight: normal;
            color: var(--color-text);
            grid-column: 1/6
            
        }

        .tryBtn {
            grid-column: 7/8;
            justify-item: center;
            align-self: start;
            width: 155%;
        }
    }

    .tab-main-content, .tab-top-content {
        margin: 0 15% 5rem 15%;
    }

    .tab-main-content {

        display: flex;
        justify-content: space-between;
        align-items: center;

        h3 {
            padding: 1rem 0;
            font-size: 1.6rem
        }

        p {
            font-size: 1.4rem;
            color: var(--main-grey)
        }

        img {
            width: 100%;
        }

        .macImage {
            width: 90%;
            margin: 0 auto
        }

        .tabletImage {
            width: 85%;
        }

        div {
            width : 33.3333%;
            text-align: center            
        }
    }



`;


export default TabDeviceContent;
