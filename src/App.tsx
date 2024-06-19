import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/header';
import MainStruct from './components/mainStruct/mainStruct';
import MainContent from './components/mainContent/mainContent';

export default function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<MainStruct />}>
          <Route path={'/main'} element={<MainContent />} />
        </Route>
      </Routes>
    </>
  );
}
