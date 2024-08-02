import React from 'react';
import { BrowserRouter} from 'react-router-dom'
import NavigationBar from './components/commun/navigationBar/NavigationBar'
import RoutesApp from './RoutesApp';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <RoutesApp />
      </BrowserRouter>
    </>
  );
}

export default App;
