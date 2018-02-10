import React from "react";
import { Col, Row } from "./Grid";
import DeleteBtn from "./DeleteBtn";
import Auth from '../modules/Auth';
import axios from 'axios';
import { Input, TextArea, FormBtn } from "./Form";

class Results extends React.Component {


    deleteBook(userId, id) {
      axios.delete("/notes/" + userId + "/" + id)
      .then(() => {
        return this.props.loadBooks()
      })
      
    }


    render() {
       const { notes, userId } = this.props;

        return (
          
            <div className="col-md-8">

                { notes.length > 0 ? (
    
                  <div>
                  {
                    notes.map((note, index) => {

                      return (<div key={index} id = {note._id} className="box">
                      
                      <div className="title">

                        <DeleteBtn onClick={() => this.deleteBook(userId, note._id)} />
                        <h4 className="resultText">{note.header}</h4>

                      </div>
                      
                      <div className="body">
                          { note.body.split('\n').map((noteLine, key) => <li key={key}>{noteLine.trim()}</li>)}
                       </div>
                      
                
              
                      </div>)
                    })
                  }

                  </div>
                ) : (
                    <div>There are no notes to display</div>
                  )
                }


            </div>
      
        );
    }
}


export default Results;