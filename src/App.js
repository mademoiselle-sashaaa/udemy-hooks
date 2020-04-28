import React, { useState } from 'react';

import SearchInput from './components/SearchInput';
import Joke from './components/Joke';
import Story from './components/Story';
import Tasks from './components/Tasks';
import Gallery from './components/Gallery';

function App() {
  const [showGallery, setShowGallery] = useState(true);

  const toggleshowGallery = () => {
    setShowGallery(!showGallery);
  }
  return (
    <div className="App">
      <h1>Hello, Sashaaa!</h1>
      <SearchInput />
      <hr />
      <Joke />
      <hr />
      <Tasks />
      <hr />
      {showGallery && <Gallery />}
      <button onClick={toggleshowGallery}>
        {showGallery ? 'Hide gallery' : 'Show galley'}
        </button>
      <Story />
    </div>
  );
}

export default App;
