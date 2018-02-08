import React, { Component } from "react";
import { Col } from "./Grid";
import { Input, TextArea, FormBtn } from "./Form";
import request from "../../node_modules/superagent/superagent";
import Auth from '../modules/Auth';

class Notey extends Component {


  constructor(props) {
  super(props);

this.handleFormSubmit = this.handleFormSubmit.bind(this)

    this.state = {
    id: "",
    title: "",
    synopsis: ""
    }
  }

componentDidMount(){
  var user  = Auth.getCurrentUser()
  this.setState({ id:user.id.id });
}

onInputChange(title, synopsis) {
  this.setState({title}),
  this.setState({synopsis})
  }

handleFormSubmit(event) {
  event.preventDefault()
        // console.log(this.state.id)

request
// .post('/notes/save/5a7630da178b9e0ba46832f4')
.post("/notes/save/"+this.state.id)
.set('Content-Type', 'application/json')
.send({ header: this.state.title, body: this.state.synopsis })
.end(function(err, res){
console.log(res.text);
}); 

  }

  handleTitleChange(e) {
    // console.log(e)
    this.setState({title: e.target.value})
  }

  handleSynopsisChange(e) {
    // console.log(e)
    this.setState({synopsis: e.target.value})
  }


  render() {
    return (
      <Col size="md-4">
        <form>
          <Input
            onChange = {(e) => {this.handleTitleChange(e)}}
            name="title"
            placeholder=""
          />
          <TextArea
            onChange = {(e) => {this.handleSynopsisChange(e)}}
            name="synopsis"
            placeholder=""
          />
          <FormBtn
            onClick={this.handleFormSubmit}
          >
            Submit
          </FormBtn>
        </form>
      </Col>

    );
  }


}
    
export default Notey;