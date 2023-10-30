import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import RepositoryCreator from "./general/RepositoryCreator";
import {Provider} from "react-redux";
import {store} from "./general/redux/store";

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <RepositoryCreator/>
          <App />
      </Provider>
  </React.StrictMode>
);