import React from 'react';
import BookContextProvider from './contexts/BookContext'

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <h1>Foo</h1>
      </BookContextProvider>
    </div>
  );
}

export default App;
