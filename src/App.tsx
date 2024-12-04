import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/header';
import MainStruct from './components/mainStruct/mainStruct';
import MainContent from './components/mainContent/mainContent';
import { UnitPage } from './components/unitPage/unitPage';
import { AdminPage } from './components/adminPage/adminPage';

export default function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<MainStruct />}>
          <Route path={'/'} element={<MainContent />} />
          <Route path={'/item/:id'} element={<UnitPage />} />
          <Route path={'admin'} element={<AdminPage />} />
        </Route>
      </Routes>
    </>
  );
}
