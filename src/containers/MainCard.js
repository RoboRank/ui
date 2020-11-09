import React, { Component } from 'react';
import DomainContainer from './DomainContainer';

class MainCard extends Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false
        };
    }

    onContextSwitch = () => {
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        return (
            <div className="App"
                style={{
                    display: "block",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh"
                }}
            >
                <DomainContainer/>
            </div>
        );
    }
} export default MainCard;