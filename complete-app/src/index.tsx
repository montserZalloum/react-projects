import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AdminPage from './pages/admin/AdminPage'
import AdminCoursesPage from './pages/admin/AdminCoursesPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminPage/>}></Route>
        <Route path="/admin/courses" element={<AdminCoursesPage />}></Route>
      </Routes>
    </BrowserRouter>
);
