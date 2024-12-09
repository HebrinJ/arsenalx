import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/header';
import MainStruct from './components/mainStruct/mainStruct';
import MainContent from './components/mainContent/mainContent';
import { UnitPage } from './components/unitPage/unitPage';
import { AdminPage } from './components/adminPage/adminPage';
import { group } from 'console';
import { UnitGroup, UnitTypes } from './utils/unitTypes';

export default function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<MainStruct />}>
          <Route path={'/'} element={<MainContent group={UnitGroup.ARMOR} type={UnitTypes.TANK} />} />
          <Route path={'/armor/tanks'} element={<MainContent group={UnitGroup.ARMOR} type={UnitTypes.TANK} />} />
          <Route path={'/armor/bbm'} element={<MainContent group={UnitGroup.ARMOR} type={UnitTypes.BBM} />} />
          <Route path={'/item/:id'} element={<UnitPage />} />
          <Route path={'admin'} element={<AdminPage />} />
        </Route>
      </Routes>
    </>
  );
}
