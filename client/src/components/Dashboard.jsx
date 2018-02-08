import React, { Component } from "react";
import { Card, CardTitle, CardText } from 'material-ui/Card';
import DeleteBtn from "./DeleteBtn";
import Jumbotron from "./Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "./Grid";
import { List, ListItem } from "./List";
import { Input, TextArea, FormBtn } from "./Form";
import Email from './Email.jsx';
import Token from './Token.jsx';
import Notey from './Notey.jsx'
import Results from './Results.jsx'
import Auth from '../modules/Auth';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            email: "",
            notes: []
        };
    };

    componentDidMount() {
        var user  = Auth.getCurrentUser()
        this.setState({ email: user.email });
        this.setState({ id: user.id.id })
    }

render() {
    return (
        <div>
            <Email addy = {this.state.email} />
            <Token token ={this.state.id} />
            <Notey />
            <Results />
        </div>
    );
}
}

export default Dashboard;