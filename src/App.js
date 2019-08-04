import React, { useState } from 'react';
import hexInRgb from './components/hexInRgb';

import './App.css';

function App() {
  const [rgb, setRgb] = useState('');
  const onChange = e => {
    const h = e.target.value;
    setRgb(hexInRgb(h));
  };
  return (
    <div className="App" data-id="App" style={{ backgroundColor: rgb }}>
      <div className="container">
        <input
          onChange={onChange}
          className="input"
          maxLength="7"
          size="10"
          type="text"
        />
        <div className="output" data-id="output">
          {rgb}
        </div>
      </div>
    </div>
  );
}

export default App;
