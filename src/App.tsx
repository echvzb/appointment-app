import Router from './Router';
import {BaseWebProvider, AppContainer} from './BaseWeb';

const App = () => (
  <BaseWebProvider>
    <AppContainer>
      <Router />
    </AppContainer>
  </BaseWebProvider>
);

export default App;
