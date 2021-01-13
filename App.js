//import liraries
import React, {useContext} from 'react';
import {MainNavigation} from './src/navigation';

// redux
import {Provider} from 'react-redux';
import store from './src/utils/redux/store';
function App() {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}

export default App;
