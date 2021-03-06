import React, { Component } from "react";
import { List, ListItem } from "./List";
import { Col, Row } from "./Grid";
import Email from './Email.jsx';
import Notey from './Notey.jsx'
import Results from './Results.jsx'
import Auth from '../modules/Auth';
import axios from 'axios';


class Dashboard extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            id: "",
            email: "",
            notes: []
        };


        this.loadBooks = this.loadBooks.bind(this)

    };

  componentDidMount() {
     var user  = Auth.getCurrentUser()
        this.setState({ name: user.name });
        this.setState({ id: user.id.id })
        this.loadBooks()

    }

    loadBooks() {
        const user = Auth.getCurrentUser()
        axios.get('/notes/'+user.id.id)
            .then((response) => {
                this.setState({ notes: response.data.notes })
                // console.log(this.state.notes)
            })
            .catch((error) => {
                console.log(error)
            })
    }



render() {
    return (
        <div>
        <Row>
         <Col size="md-12">
            <div className="top-bar-right">
            <Email name = {this.state.name} />
            </div>
        </Col>
        </Row>
    <Notey  loadBooks={this.loadBooks}/>
    <Results userId={ this.state.id} loadBooks={this.loadBooks} notes={this.state.notes}/>
        </div>

    );
}
}

export default Dashboard;