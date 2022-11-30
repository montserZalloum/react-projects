import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import AllMeetups from './pages/AllMeetups';
import NewMeetups from './pages/NewMeetups';
import Favourites from './pages/Favourites';
import Layout from './components/ui/Layout';
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<AllMeetups />} />
          <Route path='/new' element={<NewMeetups />} />
          <Route path='/favourites' element={<Favourites />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
