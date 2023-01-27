import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import HomePage from './pages/HomePage/HomePage';
import Contacts from './pages/Contacts/Contacts';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import AuthPage from './pages/AuthPage/AuthPage';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/registration" element={<RegistrationPage />}></Route>
        <Route path="/auth" element={<AuthPage />}></Route>
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </>
  );
}

export default App;
