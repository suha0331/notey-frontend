import React, { Component } from "react";
import { Card, CardTitle, CardText } from 'material-ui/Card';
import DeleteBtn from "./DeleteBtn";
import Jumbotron from "./Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "./Grid";
import { List, ListItem } from "./List";
import { Input, TextArea, FormBtn } from "./Form";
import Notey from './Notey.jsx'
import Auth from '../modules/Auth';
import Panel from './Panel';


class Dashboard extends Component {
    constructor(props) {
        super(props);
         this.state = {
            id: ''
        };
    };

    componentDidMount() {
        this.setState({ id: Auth.token })
    }

    




	  render() {

    return (
    <div>
       <Panel />
       <Notey />
    </div>
);
}}

export default Dashboard;