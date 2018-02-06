import React, { Component } from "react";
import DeleteBtn from "./DeleteBtn";
import Jumbotron from "./Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "./Grid";
import { List, ListItem } from "./List";

class Results extends React.Component {
    
     constructor(props) {
        super(props);
    this.state = {
        books: []
    }

    };


    render() {
        return (

            <Col size="md-8">
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                 <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} 
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
</Col>


        );
    }
}


export default Results;