import React from 'react';
import './App.css';

import { Entry } from './pages/entry/Entry.page'
import { DefaultLayout } from './layout/DefaultLayout'
import { Dashboard } from "./pages/dashboard/Dashboard.page"

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
      {/* in the above case the sample text is stored in {props.children} of default layout */}
    </div>
  );
}

export default App;