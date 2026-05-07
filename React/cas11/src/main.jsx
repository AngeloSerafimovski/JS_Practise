import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/App.jsx';
import {BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import {Users} from './components/users'
import {Provider} from 'react-redux';
import store from './store.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
<Router>
  <Routes>
    <Route path='/' element={<App/>}>
      <Route path='/users' element={<Users />} />
      </Route>
  </Routes>
</Router>
</Provider>

);


