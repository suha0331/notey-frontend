import React, { Component } from 'react';
import Notey from "./Notey.jsx"
import Auth from '../modules/Auth';
import Email from './Email.jsx';
import Token from './Token.jsx';

class Panel extends Component {
    constructor(props) {
        super(props);
         this.state = {
            user: '',
            id: ''
        };
    };


    componentDidMount() {
        this.setState({ user: Auth.user });
        this.setState({ id: Auth.user.id.id });
        // console.log(this.state.user)
        // console.log(this.state.id)
    }


    render() {
      
                return (
<div>
<Email addy = {this.state.user.email} />
<Token token ={this.state.id} />
</div>
)

};
}


export default Panel;