import React, { Component } from 'react';
import dummyStore from './dummy-store';
import {Route, Link} from 'react-router-dom';
import FolderList from './FolderList';


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
  var stuff = notes[0];
 // console.log(stuff.id);
  //console.log(folders);
  return(
    <div className='App'>
<Route
           exact path='/'
           render={(props) => <FolderList{...props} folders={folders} />}
          />
      
      </div>
  );


}
}

export default App;

