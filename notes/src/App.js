import React from 'react';
import { Route } from 'react-router-dom';
import './styles/App.css';

// Components
import Sidebar from './comps/Sidebar';
import NoteList from './comps/NoteList';
import Note from './comps/Note';
import NewNote from './comps/NewNote';

class App extends React.Component {
  render() {
    return (
      <div className="App__container">
        <Sidebar />
        <div className="content__container">
          <Route exact path="/" component={NoteList} />
          <Route path="/view/:id" component={Note} />
          <Route path="/new" component={NewNote} />
        </div>
      </div>
    );
  }
}

export default App;
