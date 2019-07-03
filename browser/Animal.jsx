import React from 'react';

import Cat from './Cat.jsx';
import Dog from './Dog.jsx';
import Bear from './Bear.jsx';


export default function Animal(props){
  return (
    <div className="animalContainer">
      {
        {
          cat: <Cat {...props} />,
          dog: <Dog {...props} />,
          bear: <Bear {...props} />
        }[props.type]
      }
    </div>
  );
}

