import React, { Component } from 'react';

import Tab from '../components/Tabs/TabComponent'
import Header from '../components/Header/Header';

class Main extends Component {
    render() {
        return(
            <div>
                <Header />
                <Tab />
            </div>
        )
    }
}

export default Main;
