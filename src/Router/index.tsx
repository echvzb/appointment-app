import {Routes, BrowserRouter, Route} from 'react-router-dom';
import routes from './routes';
import {Auth} from '../components/Auth';

const Router = () => (
  <BrowserRouter>
    <Auth />
    <Routes>
      {routes.map(([path, Element, props]) => (
        <Route key={path} path={path} element={<Element {...props} />} />
      ))}
    </Routes>
  </BrowserRouter>
);

export default Router;
