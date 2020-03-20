import React, { useState } from 'react';

export default function Name() {
  const [name, setName] = useState('');

  return (
    <div>
      <h2>Welcome to Frontpage</h2>
      <label>Enter name</label>

      <input
        onChange={event => {
          setName(event.target.value);
        }}
        type="text"
      />
      <h6>Welcome {name}</h6>
    </div>
  );
}
