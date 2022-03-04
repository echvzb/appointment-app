import {Routes, BrowserRouter, Route} from 'react-router-dom';
import routes from './routes';
import {Auth, Navbar} from '../components';

const Router = () => (
  <BrowserRouter>
    <Auth />
    <Navbar>
      <Routes>
        {routes.map(([path, Element, props]) => (
          <Route key={path} path={path} element={<Element {...props} />} />
        ))}
      </Routes>
    </Navbar>
  </BrowserRouter>
);

export default Router;
