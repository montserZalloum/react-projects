import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Admin from './pages/admin/index';
import UsersList from './pages/admin/users/UsersList';
import CoursesList from './pages/admin/courses/CoursesList';
import NewUser from './pages/admin/users/NewUser';
import store from './store';
import { Provider } from 'react-redux';
import NewCourse from './pages/admin/courses/NewCourse';
import LessonsList from './pages/admin/lessons/LessonsList';
import NewLesson from './pages/admin/lessons/NewLesson';
import HomePage from './pages/HomePage';
import CoursePage from './pages/course/CoursePage';
import RegisterPage from './pages/auth/RegisterPage';
import LoginPage from './pages/auth/LoginPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* auth */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/course/:id" element={<CoursePage />} />

          {/**************/}
          {/* Admin */}
          {/**************/}
          <Route path="/admin" element={<Admin />} />
          {/* users */}
          <Route path="/admin/users" element={<UsersList />} />
          <Route path="/admin/users/add" element={<NewUser />} />
          <Route path="/admin/users/:id" element={<NewUser />} />
          {/* courses */}
          <Route path="/admin/courses" element={<CoursesList />} />
          <Route path="/admin/courses/add" element={<NewCourse />} />
          <Route path="/admin/courses/:id" element={<NewCourse />} />

          {/* course */}

          
          {/* Lessons */}
          <Route path="/admin/courses/:id/lessons" element={<LessonsList />} />
          <Route path="/admin/courses/:id/lessons/add" element={<NewLesson />} />
          <Route path="/admin/courses/:id/lessons/:lessonID" element={<NewLesson />} />

          {/**************/}
          {/* End Admin */}
          {/**************/}
        </Routes>
      
      </BrowserRouter>
  </Provider>
);

