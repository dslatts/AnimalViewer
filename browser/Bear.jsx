import React from 'react';

export default function Bear(props){
  return (
    <div className="bear">
      <h2>{props.name}</h2>
      <img src={props.image} />
    </div>
  );
}
