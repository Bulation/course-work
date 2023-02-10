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
        <Route index element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />}></Route>
        <Route path="/registration" element={<RegistrationPage />}></Route>
        <Route path="/auth" element={<AuthPage />}></Route>
        <Route path="/news" element={<NewsPage />}></Route>
        <Route path="/news/:id" element={<PostPage />}></Route>
        <Route path="/catalog" element={<CatalogPage />}></Route>
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
