import React, { Component } from 'react';
import dummyStore from './dummy-store';
import {Route, Link} from 'react-router-dom';
import FolderList from './FolderList';
import Notelist from './Notelist';
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

          
          
      </main>
      </div>
      
  );


}
}

export default App;

