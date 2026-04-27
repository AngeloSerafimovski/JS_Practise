import React from 'react';
import {Outlet} from 'react-router-dom';


export function App(){



  return(
    <div id='main'>
      <h2>App</h2>
      <Outlet/>
    </div>
  )
}