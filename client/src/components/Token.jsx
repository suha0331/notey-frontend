import React, { Component } from 'react';

class Token extends React.Component {
	
    render() {
        return (
     <p className="App-intro">
				Logged In User is: {this.props.token}
				</p>
                
        );
    }
}


export default Token;