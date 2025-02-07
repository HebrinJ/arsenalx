import { Routes, Route } from 'react-router-dom';
import MainStruct from './components/mainStruct/mainStruct';
import MainContent from './components/mainContent/mainContent';
import { UnitPage } from './components/unitPage/unitPage';
import { ARMOR, BBM, TANK } from './constants/unitTypeConstants';

export default function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<MainStruct />}>
          <Route path={'/'} element={<MainContent group={ARMOR} type={TANK} />} />
          <Route path={'/list/tanks'} element={<MainContent group={ARMOR} type={TANK} />} />
          <Route path={'/list/bbm'} element={<MainContent group={ARMOR} type={BBM} />} />
          <Route path={'/item/:id'} element={<UnitPage />} />
        </Route>
      </Routes>
    </>
  );
}
