import React from 'react';

function Note() {
  let counter = 1;

  return (
    <div className="note" >
      <h1> this the {counter} note </h1>
         <p>
           it is just the start 
         </p>
    </div>
  );
}

export default Note ;