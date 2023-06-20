import { Routes, Route, Navigate } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import HomePage from './pages/HomePage/HomePage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import AuthPage from './pages/AuthPage/AuthPage';
import NewsPage from './pages/NewsPage/NewsPage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import PostPage from './pages/PostPage/PostPage';
import { createContext, useState } from 'react';
import { SITE_URL } from './constants/constants';

type FlatViewType = {
  isList: boolean;
  setIsList: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Context = createContext<FlatViewType>({
  isList: false,
  setIsList: () => {},
});

function App() {
  const [isList, setIsList] = useState(false);
  return (
    <Context.Provider value={{ isList, setIsList }}>
      <Routes>
        <Route path={`${SITE_URL}`} element={<HomePage />} />
        <Route path={`${SITE_URL}contacts`} element={<ContactsPage />}></Route>
        <Route path={`${SITE_URL}registration`} element={<RegistrationPage />}></Route>
        <Route path={`${SITE_URL}auth`} element={<AuthPage />}></Route>
        <Route path={`${SITE_URL}news`} element={<NewsPage />}></Route>
        <Route path={`${SITE_URL}news/:id`} element={<PostPage />}></Route>
        <Route path={`${SITE_URL}catalog`} element={<CatalogPage />}></Route>
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
