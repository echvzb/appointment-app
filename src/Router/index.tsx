import {Routes, BrowserRouter, Route} from 'react-router-dom';
import routes from './routes';

const Router = () => (
  <BrowserRouter>
    <Routes>
      {routes.map(([path, Element, props]) => (
        <Route key={path} path={path} element={<Element {...props} />} />
      ))}
    </Routes>
  </BrowserRouter>
);

export default Router;
