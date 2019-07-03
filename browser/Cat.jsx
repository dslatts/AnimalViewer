import React from 'react';

export default function Cat(props){
  return (
    <div className="cat">
      <h2>{props.name}</h2>
      <img src={props.image} />
    </div>
  );
}
