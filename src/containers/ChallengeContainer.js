import React, { Component } from 'react';
import Challenge from '../components/Challenge';

class ChallengeContainer extends Component {
    render() {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh"
                }}
            >
                <Challenge contextSwitcher={this.props.contextSwitcher} />
            </div>
        );
    }
} export default ChallengeContainer;