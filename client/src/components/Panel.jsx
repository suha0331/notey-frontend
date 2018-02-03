import React, { Component } from 'react';
import Notey from "./Notey.jsx"
import Auth from '../modules/Auth';
import Email from './Email.jsx';

class Panel extends Component {
    constructor(props) {
        super(props);
         this.state = {
            user: ''
        };
    };


    componentDidMount() {
        console.log(Auth)
        this.setState({ user: Auth.user });
    }


    render() {
      
                return (
<div>
<Email addy = {this.state.user.email}/>
</div>
)

};
}


export default Panel;