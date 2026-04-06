import React from 'react';

export const Age = (props) => {
  return (
    <div>
      {props.user.godini > 18 ? (
        <div>
          <h3>{props.user.ime} {props.user.prezime}</h3>
          <p>Godini: {props.user.godini}</p>
        </div>
      ) : (
        <p>Less then 18</p>
      )}
    </div>
  );
};