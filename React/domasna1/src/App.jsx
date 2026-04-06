import React from 'react';
import { Age } from './components/Age';
import { Address } from './components/Address';

export function App() {
  var user1 = {
    ime: 'Angela',
    prezime: 'Petrovska',
    adresa: 'Skopje',
    godini: 22
  };

  var user2 = {
    ime: 'Marko',
    prezime: 'Nikolov',
    adresa: 'Bitola',
    godini: 16
  };

  var user3 = {
    ime: 'Elena',
    prezime: 'Stojanovska',
    adresa: 'Skopje',
    godini: 19
  };

  var user4 = {
    ime: 'Ivan',
    prezime: 'Trajkov',
    adresa: 'Strumica',
    godini: 17
  };

  return (
    <div>
      <h1>Users App</h1>

      <h2>Korisnici postari od 18 godini</h2>
      <Age user={user1} />
      <Age user={user2} />
      <Age user={user3} />
      <Age user={user4} />

      <hr />
      <h2>Korisnici od Skopje</h2>
      <Address user={user1} />
      <Address user={user2} />
      <Address user={user3} />
      <Address user={user4} />
    </div>
  );
}

