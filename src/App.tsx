import {BaseWebProvider, AppContainer} from './BaseWeb';
import {RequestProvider} from './request';
import Router from './Router';

const App = () => (
  <RequestProvider>
    <BaseWebProvider>
      <AppContainer>
        <Router />
      </AppContainer>
    </BaseWebProvider>
  </RequestProvider>
);

export default App;
