import React from 'react';

class Email extends React.Component {
	
    render() {
        return (
     <h4 className="App-intro">
				Welcome, {this.props.name}
				</h4>
                
        );
    }
}


export default Email;