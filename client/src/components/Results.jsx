import React from "react";
import {Link} from "react-router-dom";
import {Col, Container, Row} from "./Grid";
import {List, ListItem} from "./List";
import Auth from '../modules/Auth';
import axios from 'axios';

class Results extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            notes: []
        }

    };

    componentDidMount() {
      var user  = Auth.getCurrentUser()
      this.setState({ id:user.id.id });

      axios.get('http://localhost:3001/notes/' + user.id.id)
          .then((response) => {
              this.setState({notes: response.data.notes})
              console.log(this.state.notes)
          })
          .catch((error) => {
              console.log(error)
          })
    }


    // handleAppear() {
    //     return (
    //         this.state.notes.map((note, index) => {
    //             <Col size="md-8">
    //                 <div key={index} className="box">
    //                     <h4>{note.header}</h4>
    //                     <p>{note.body}</p>
    //                 </div>
    //             </Col>
    //         }))
    // }


    render() {
        const { notes } = this.state;

        return (
            <Col size="md-8">
                {notes.length > 0 ? (
                  <div>
                  {
                    notes.map((note, index) => {
                      return (<div key={index} className="box">
                        <h4>{note.header}</h4>
                        <p>{note.body}</p>
                      </div>)
                    })
                  }
                  </div>
                ) : (
                    <div>NO DATA</div>
                  )
                }
            </Col>
        );
    }
}


export default Results;