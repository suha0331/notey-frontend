import React, { Component } from "react";
import DeleteBtn from "./DeleteBtn";
import Jumbotron from "./Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "./Grid";
import { List, ListItem } from "./List";
import { Input, TextArea, FormBtn } from "./Form";
import request from "../../node_modules/superagent/superagent";
import Dashboard from "./Dashboard.jsx"

class Notey extends Component {


    constructor(props) {
  super(props);
this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.state = {
    title: "",
    synopsis: ""
    }
  }

  onInputChange(title, synopsis) {
    this.setState({title}),
    this.setState({synopsis})
    }

handleFormSubmit(event) {
  console.log(this.state)
  console.log(this.props.id)
  event.preventDefault()


request
.post('/notes/save/'+this.props.id)
.set('Content-Type', 'application/json')
.send({ header: this.state.title, body: this.state.synopsis })
.end(function(err, res){
console.log(res.text);
}); 

  }

  handleTitleChange(e) {
    console.log(e)
    this.setState({title: e.target.value})
  }

  handleSynopsisChange(e) {
    console.log(e)
    this.setState({synopsis: e.target.value})
  }
  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  // handleInputChange = event => {
  //   const { value } = event.target;

  //   this.setState({
  //     title: value,
  //     synopsis: value
  //   });
  // };


  render() {
    return (

      <div class="container-fluid"> 
        <Row>
            <form>
              <Input
                onChange = {(e) => {this.handleTitleChange(e)}}
                name="title"
                placeholder="Title (required)"
              />
              <TextArea
                onChange = {(e) => {this.handleSynopsisChange(e)}}
                name="synopsis"
                placeholder="Synopsis"
              />
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
        </Row>
      </div>
    );
  }




}
    
export default Notey;