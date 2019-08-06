import React, { Component } from 'react';
import dummyStore from './dummy-store';
import {Route, Link} from 'react-router-dom';
import FolderList from './FolderList';
import Notelist from './Notelist';
import NotePage from './NotePage';
import {getNotesForFolder, findNote, findFolder} from './notes-helpers';



class App extends Component {

  state = {
    notes: [],
    folders: []
};

componentDidMount() {
  // fake date loading from API call
  setTimeout(() => this.setState(dummyStore), 600);
}


render(){
  const {notes, folders} = this.state;
  

  return(
    <div className='App'>
       <main>
       
          <Route
           exact path='/'
           render={(props) => <FolderList{...props} folders={folders} />}
          />


           <Route
           path='/folder/:folderId'
           render={(routeProps) => {

            const {folderId} = routeProps.match.params;
            const notesForFolder = getNotesForFolder(
              notes,
              folderId
          );
          return(
             <Notelist{...routeProps}  folders={folders} notes={notesForFolder} />
          );
            }
            }
          />


<Route
           path='/note/:noteId'
           render={(routeProps) => {

            const {noteId} = routeProps.match.params;
            const note = findNote(
              notes,
              noteId
          );
          console.log("note is "+note);
          return(
             <NotePage{...routeProps}  note={note} />
          );
            }
            }
          />
          
      </main>
      </div>
      
  );


}
}

export default App;

