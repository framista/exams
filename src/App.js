import React from 'react';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppRouter from './routes/AppRouter';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />;
    </Provider>
  );
}

export default App;
