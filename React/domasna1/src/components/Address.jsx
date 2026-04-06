import React from 'react';

export const Address = (props) => {
  return (
    <div>
      {props.user.adresa === 'Skopje' && (
        <div>
          <h3>{props.user.ime} {props.user.prezime}</h3>
          <p>Adresa: {props.user.adresa}</p>
        </div>
      )}
    </div>
  );
};