import React from 'react';

export default function Dog(props){
  return (
    <div className="dog">
      <h2>{props.name}</h2>
      <img src={props.image} />
    </div>
  );
}
