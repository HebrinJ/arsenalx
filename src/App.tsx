import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/header';
import MainStruct from './components/mainStruct/mainStruct';
import MainContent from './components/mainContent/mainContent';
import { UnitPage } from './components/unitPage/unitPage';

export default function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<MainStruct />}>
          <Route path={'/'} element={<MainContent />} />
          <Route path={'/:id'} element={<UnitPage />} />
        </Route>
      </Routes>
    </>
  );
}
