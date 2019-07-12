import React from 'react';
import { Provider } from 'react-redux';
import RepositoryList from './Components/RepositoryList';
import store from './Store';

const App: React.FC = () => (
  <Provider store={store}>
    <RepositoryList />
  </Provider>
);

export default App;
