import React, { useState } from 'react'
import './App.css';
import Form from './Components/Form'
import NoteList from './Components/NoteList'

function App() {

  const [query, setQuery] = useState('')

  return (
    <main className='Container'>
      <h1>To-do List</h1>
      <div className="Form">
        <Form setQuery={setQuery} />
      </div>
      <div className="NoteList">
        <NoteList query={query} />
      </div>
    </main>
  );
}

export default App;
