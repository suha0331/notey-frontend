import React from 'react';

class Email extends React.Component {
	
    render() {
        return (
     <p className="App-intro">
				Logged In User is: {this.props.addy}
				</p>
                
        );
    }
}


export default Email;