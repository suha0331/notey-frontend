import React from "react";
import { Col } from "./Grid";
import DeleteBtn from "./DeleteBtn";
import Auth from '../modules/Auth';
import axios from 'axios';

class Results extends React.Component {




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

    deleteBook(userId, id) {
      axios.delete("http://localhost:3001/notes/" + userId + "/" + id)
      .then(() => {
        return this.props.loadBooks()
      })
      
    }

    render() {
       const { notes, userId } = this.props;

        return (
            <Col size="md-8">

                {notes.length > 0 ? (
    
                  <div>
                  {
                    notes.map((note, index) => {
                      return (<div key={index} id = {note._id} className="box">
                      <DeleteBtn onClick={() => this.deleteBook(userId, note._id)} />

                      <div className="title">
                        <h4>{note.header}</h4>
                      </div>
                      
                      <div className="body">
                        <ul>
                          { note.body.split('\n').map((noteLine, key) => <li key={key}>{noteLine.trim()}</li>)}
                       </ul>
                        </div>
              
                      </div>)
                    })
                  }

                  </div>
                ) : (
                    <div>There are no notes to display</div>
                  )
                }

            </Col>
        );
    }
}


export default Results;