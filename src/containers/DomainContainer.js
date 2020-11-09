import React, { Component } from 'react';
import Domain from "../components/Domain"

class DomainContainer extends Component {
    render() {
        return (
            <div
                style={{
                    display: "block",
                    justifySelf: "center",
                    alignSelf: "center",
                    maxHeight: "450px",
                    maxWidth: "450px"
                }}
            >
                <Domain/>
            </div>
        );
    }
} export default DomainContainer;