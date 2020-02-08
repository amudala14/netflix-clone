import React from 'react';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { cross } from 'react-icons-kit/icomoon/cross' 
import { checkmark } from 'react-icons-kit/icomoon/checkmark' 

import { Button } from '../../Button/Button';

const TabPricesContent = () => {
    return(
        <Container>    
            <div className="top-tab-content">
                <h2>Coose one plan and watch everything on netflix.</h2>
                <Button>Try it now</Button>
            </div>
            <div className="tab-table-content">
                <table className="table">
                    <thead>
                        <th></th>
                        <th>Basic</th>
                        <th>Standar</th>
                        <th>Premium</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Monthly</td>
                            <td>$9.99</td>
                            <td>$13.99</td>
                            <td>$16.99</td>
                        </tr>
                        <tr>
                            <td>HD available</td>
                            <td><Icon icon={cross} size={10} /></td>
                            <td><Icon icon={checkmark} size={10} /></td>
                            <td><Icon icon={checkmark} size={10} /></td>
                        </tr>

                        <tr>
                            <td>Ultra HD available</td>
                            <td><Icon icon={cross} size={10} /></td>
                            <td><Icon icon={cross} size={10} /></td>
                            <td><Icon icon={checkmark} size={10} /></td>
                        </tr>

                        <tr>
                            <td>Screens you can watch on at the same time</td>
                            <td>1</td>
                            <td>2</td>
                            <td>4</td>
                        </tr>

                        <tr>
                            <td>Watch on your laptop, TV, phone and tablet</td>
                            <td><Icon icon={checkmark} size={10} /></td>
                            <td><Icon icon={checkmark} size={10} /></td>
                            <td><Icon icon={checkmark} size={10} /></td>
                        </tr>

                        <tr>
                            <td>Unlimited movies and TV show</td>
                            <td><Icon icon={checkmark} size={10} /></td>
                            <td><Icon icon={checkmark} size={10} /></td>
                            <td><Icon icon={checkmark} size={10} /></td>
                        </tr>

                        <tr>
                            <td>Cancel anytime</td>
                            <td><Icon icon={checkmark} size={10} /></td>
                            <td><Icon icon={checkmark} size={10} /></td>
                            <td><Icon icon={checkmark} size={10} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Container>    
    )
}

export const Container = styled.div`
    background-color: var(--main-deep-dark);
    padding: 5rem 0;

    .top-tab-content {
        margin: 0 15% 5rem 15%;
    }

    .tab-table-content {
        margin: 0 15% 0 15%;
    }

    h2 {
        font-size: 1.8rem
    }

    .top-tab-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .table {
        width: 100%;
    }

    .table th {
        text-transform: uppercase;
        font-size: 1.6rem;
        padding: .8rem
    }

    .table tbody {
        display: table-raw-group;
        vertical-align: middle;
        border: none;
        font-size: 1.5rem
    }

    .table tbody tr td {
        color: #999;
        padding: .8rem 1.2rem;
        text-align: center;
    }
    
    .table tbody tr td:first-child {
        text-align: left;
    }

    .table tbody tr:nth-child(even) {
        background: #222;
    }
`;


export default TabPricesContent;