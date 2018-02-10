import React, { Component } from "react";
import { Col } from "./Grid";
import { Input, TextArea, FormBtn } from "./Form";
import request from "superagent";
import Auth from '../modules/Auth';
import BulletBtn from './BulletBtn';
class Notey extends Component {
  constructor(props) {
  super(props);
this.handleFormSubmit = this.handleFormSubmit.bind(this)
this.bulletTime = this.bulletTime.bind(this)
this.handleSynopsisChange = this.handleSynopsisChange.bind(this)
    this.state = {
    id: "",
    title: "",
    synopsis: "",
    showList: false,
    text: ''
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
handleFormSubmit(event , title, synopsis) {
  event.preventDefault()
        // console.log(this.state.id)
request
// .post('/notes/save/5a7630da178b9e0ba46832f4')
.post("/notes/save/"+this.state.id)
.set('Content-Type', 'application/json')
.send({ header: this.state.title, body: this.state.synopsis })
.end((err, res) => {
  console.log(res.text);
 // setTimeout(() => {
    this.props.loadBooks()
  //}, 500)
}); 
    this.setState({ title: "" })
    this.setState({ synopsis: "" })
  }
  handleTitleChange(e) {
    // console.log(e)
    this.setState({title: e.target.value})
  }
  handleSynopsisChange(e) {
    // console.log(e)
    this.setState({synopsis: e.target.value})
  }
  bulletTime() {
  console.log("bring me bullets")
              this.setState({ showList: !this.state.showList})
  }
  render() {
    const { title,synopsis, showList } = this.state;
    const list = synopsis.split('\n');
    return (
      <Col size="md-4">
        <form>
          <BulletBtn
          onClick={this.bulletTime} />
          <Input
            onChange = {(e) => {this.handleTitleChange(e)}}
            name="title"
            value={title}
          />
          { !showList && 
            <TextArea
              onChange = {this.handleSynopsisChange}
              name="synopsis"
              value={synopsis}
              placeholder=""
            />
          }
          {
            showList &&
            <ul>
              { list
                .map( (line, index) => 
                  <li key={index}><input onChange={(e) =>{
                    const newList = [...list];
                    newList[index] = e.target.value;
                    this.setState({
                      synopsis: newList.join('\n')
                    })
                 }} value={line.trim()}/></li>
                )
              }
            </ul>
          }
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