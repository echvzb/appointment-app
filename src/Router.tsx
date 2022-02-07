import {Routes, BrowserRouter, Route} from 'react-router-dom';
import {IndexPage} from './pages';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<IndexPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
