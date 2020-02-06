import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import TabDoors from './TabDoors/TabDoors';
import TabDevices from './TabDevices/TabDevices';
import TabPrices from './TabPrices/TabPrices';

import TabDoorsContent from './TabDoors/TabDoorsContent';

// import 'react-tabs/style/react-tabs.css';
import './TabComponent.css'

class TabComponet extends React.Component {
    
    state = {
        tabIndex : 0
    }

    render() {
        return(
            <Tabs 
                className="tabs" 
                selectedIndex= {this.state.tabIndex}
                onSelect= {tabIndex => this.setState({tabIndex})}
            >
                <TabList className="tab-nav-container">
                    <Tab className={`${this.state.tabIndex === 0 ? 'tab-selected active' : null}`}>
                        <TabDoors />
                        <p>No commitments <br/> Cancel online anytime.</p>
                    </Tab>
                    <Tab className={`${this.state.tabIndex === 1 ? 'tab-selected active' : null}`}>
                        <TabDevices />
                        <p style={{marginTop: '-.5123rem'}}>Watch anywhere</p>
                    </Tab>
                    <Tab className={`${this.state.tabIndex === 2 ? 'tab-selected active' : null}`}>
                        <TabPrices />
                        <p>Pick your price</p>
                    </Tab>
                </TabList>
                <TabPanel>
                    <TabDoorsContent />
                </TabPanel>
            </Tabs>
        )
    }
}

export default TabComponet;